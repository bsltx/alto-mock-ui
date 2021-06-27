import { useEffect, useState } from 'react';
import profileIcon from 'src/assets/images/Profile_icon.png';
import vibesIcon from 'src/assets/images/Vibes_icon.png';
import { dateStringToShortTime } from 'src/helpers/utils';
import { selectMission } from 'src/redux/appSlice';
import { useAppSelector } from 'src/redux/hooks';

interface BottomNavProps {
  showEnRoute: boolean;
}

const BottomNav = ({ showEnRoute }: BottomNavProps) => {
  const { trip } = useAppSelector(selectMission);
  const [dropoff, setDropoff] = useState('');
  const [arrival, setArrival] = useState('');

  useEffect(() => {
    if (trip) {
      const {
        estimated_arrival,
        dropoff_location: { name }
      } = trip;

      // Potential coverage for other dropoff name formats. Need more info
      name.includes(' - ')
        ? setDropoff(name.split('-')[0].trim())
        : setDropoff(name);
      setArrival(dateStringToShortTime(estimated_arrival));
    }
  }, [trip]);

  return (
    <>
      <div className='bottom-nav'>
        <div className='nav-container'>
          <img src={profileIcon} alt='Profile Menu Icon' />
          <div className='nav-trip-details'>
            <p className='airport'>{dropoff}</p>
            <p className='eta'>{!showEnRoute ? arrival : 'En route...'}</p>
          </div>
          <img src={vibesIcon} alt='Profile Menu Icon' />
        </div>
      </div>
      <div className='content-bumper' />
    </>
  );
};

export default BottomNav;
