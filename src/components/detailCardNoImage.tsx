import { useEffect, useState } from 'react';
import { TripType } from 'src/helpers/mission.type';
import { cityStateZipString, dateStringToShortTime } from 'src/helpers/utils';
import { appSlice } from 'src/redux/appSlice';
import { useAppDispatch } from 'src/redux/hooks';
import BigButton from 'src/components/bigButton';
import DetailHeader from 'src/components/detailHeader';
import DetailTable from 'src/components/detailTable';
import editIcon from 'src/assets/images/Edit_icon.png';

interface DetailCardNoImageProps {
  trip: TripType | null;
  id: string;
}

const DetailCardNoImage = ({ trip, id }: DetailCardNoImageProps) => {
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState({
    headerText: '',
    headerSubText: '',
    detailTableContent: [
      {
        title: '',
        content: ''
      }
    ],
    buttonText: '',
    pickup: {
      name: '',
      addrLine1: '',
      addrLine2: '',
      cityStateZip: ''
    },
    dropoff: {
      name: '',
      addrLine1: '',
      addrLine2: '',
      cityStateZip: ''
    },
    notes: ''
  });
  useEffect(() => {
    if (!!trip) {
      setDetails((props) => ({
        ...props,
        headerText: dateStringToShortTime(trip.estimated_arrival),
        headerSubText: `Estimated arrival at ${trip.dropoff_location.name}`,
        detailTableContent: [
          {
            title: 'Estimated Fare:',
            content: `$${trip.estimated_fare_min / 100} - $${
              trip.estimated_fare_max / 100
            }`,
            infoLink: 'https://google.com'
          },
          {
            title: 'Passengers:',
            content: `${trip.passengers_min} - ${trip.passengers_max}`
          },
          {
            title: 'Payment:',
            content: trip.payment
          }
        ],
        buttonText: 'CANCEL TRIP',
        pickup: {
          name: trip.pickup_location.name,
          addrLine1: trip.pickup_location.street_line1,
          addrLine2: trip.pickup_location.street_line2,
          cityStateZip: cityStateZipString(trip.pickup_location)
        },
        dropoff: {
          name: trip.dropoff_location.name,
          addrLine1: trip.dropoff_location.street_line1,
          addrLine2: trip.dropoff_location.street_line2,
          cityStateZip: cityStateZipString(trip.dropoff_location)
        },
        notes: trip.notes
      }));
    }
  }, [trip]);

  const updateNotes = () => {
    trip &&
      dispatch(
        appSlice.actions.updateNotes(
          trip.notes.includes('International')
            ? 'Please drop me off in Terminal A instead'
            : 'Can you drop me off at AA International Bag Drop please?'
        )
      );
  };

  return (
    <div className='detail-card-no-image' id={id}>
      <div className='dcni-header'>
        <p>Your Trip</p>
      </div>
      <div className='dcni-content'>
        <DetailHeader
          isJumboTime
          jumboText={details.headerText}
          subText={details.headerSubText}
        />
        <DetailTable content={details.detailTableContent} />
        <div className='trip-notes'>
          <div className='pickup'>
            {details.pickup.name && <p>{details.pickup.name}</p>}
            {details.pickup.addrLine1 && <p>{details.pickup.addrLine1}</p>}
            {details.pickup.addrLine2 && <p>{details.pickup.addrLine2}</p>}
            {details.pickup.cityStateZip && (
              <p>{details.pickup.cityStateZip}</p>
            )}
          </div>
          <div className='dropoff'>
            {details.dropoff.name && <p>{details.dropoff.name}</p>}
            {details.dropoff.addrLine1 && <p>{details.dropoff.addrLine1}</p>}
            {details.dropoff.addrLine2 && <p>{details.dropoff.addrLine2}</p>}
            {details.dropoff.cityStateZip && (
              <p>{details.dropoff.cityStateZip}</p>
            )}
          </div>
          <div className='custom-notes'>
            <p>{details.notes}</p>
            <img src={editIcon} alt='Edit Note Icon' onClick={updateNotes} />
          </div>
        </div>
        <BigButton text={details.buttonText} disabled />
      </div>
    </div>
  );
};

export default DetailCardNoImage;
