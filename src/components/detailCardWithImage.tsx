import ImageCardHeader from 'src/components/imageCardHeader';
import {
  DriverType,
  TripType,
  VehicleType,
  VibeType
} from 'src/helpers/mission.type';
import { useEffect, useState } from 'react';
import { dateStringToShortTime } from 'src/helpers/utils';
import { useAppDispatch } from 'src/redux/hooks';
import { appSlice } from 'src/redux/appSlice';
import DetailHeader from './detailHeader';
import DetailTable from './detailTable';
import BigButton from './bigButton';

interface DetailCardWithImageProps {
  driver?: DriverType | null;
  vehicle?: VehicleType | null;
  trip?: TripType | null;
  vibe?: VibeType | null;
  id: string;
}

const DetailCardWithImage = ({
  driver,
  vehicle,
  trip,
  vibe,
  id
}: DetailCardWithImageProps) => {
  const dispatch = useAppDispatch();
  const [cardType, setCardType] = useState('');
  const [imageHeaderProps, setImageHeaderProps] = useState({
    imgSrc: '',
    imgAlt: '',
    isMap: false
  });
  const [details, setDetails] = useState({
    isTimeHeader: false,
    headerText: '',
    headerSubText: '',
    detailTableContent: [
      {
        title: '',
        content: ''
      }
    ],
    buttonText: '',
    buttonDisabled: false
  });

  useEffect(() => {
    if (!!driver) {
      setCardType('driver');
      setImageHeaderProps({
        imgSrc: driver.image,
        imgAlt: `Image of your driver, ${driver.name}`,
        isMap: false
      });
      setDetails((props) => ({
        ...props,
        headerText: driver.name,
        detailTableContent: [
          {
            title: '',
            content: driver.bio
          }
        ],
        buttonText: 'CONTACT DRIVER',
        buttonDisabled: true
      }));
    } else if (!!vehicle) {
      setCardType('vehicle');
      setImageHeaderProps({
        imgSrc: vehicle.image,
        imgAlt: `Image of your ${vehicle.color} ${vehicle.make} Alto vehicle`,
        isMap: false
      });
      setDetails((props) => ({
        ...props,
        headerText: vehicle.license,
        detailTableContent: [
          {
            title: 'Make / Model',
            content: vehicle.make
          },
          {
            title: 'Color',
            content: vehicle.color
          }
        ],
        buttonText: 'IDENTIFY VEHICLE',
        buttonDisabled: true
      }));
    } else if (!!trip && !!vibe) {
      setCardType('trip');
      setImageHeaderProps({
        imgSrc: '/images/Map_overview.png',
        imgAlt: `Default image of map overview`,
        isMap: true
      });
      setDetails((props) => ({
        ...props,
        isTimeHeader: true,
        headerText: dateStringToShortTime(trip.estimated_arrival),
        headerSubText: `Estimated arrival at ${trip.dropoff_location.name}`,
        detailTableContent: [
          {
            title: 'Current Vibe',
            content: vibe.name
          }
        ],
        buttonText: 'CHANGE VEHICLE VIBE'
      }));
    }
  }, [driver, vehicle, trip, vibe]);

  const changeVibe = () => {
    vibe &&
      dispatch(
        appSlice.actions.changeVibe(
          vibe.name === 'Sanctuary' ? 'Vaporwave Beats' : 'Sanctuary'
        )
      );
  };

  return (
    <div className='detail-card-with-image' id={id}>
      <ImageCardHeader cardType={cardType} {...imageHeaderProps} />
      <div className='dcwi-content'>
        <DetailHeader
          isJumboTime={details.isTimeHeader}
          cardType={cardType}
          jumboText={details.headerText}
          subText={details.headerSubText}
        />
        <DetailTable content={details.detailTableContent} />
      </div>
      <BigButton
        text={details.buttonText}
        disabled={details.buttonDisabled}
        btnClick={!details.buttonDisabled ? changeVibe : () => {}}
      />
    </div>
  );
};

export default DetailCardWithImage;
