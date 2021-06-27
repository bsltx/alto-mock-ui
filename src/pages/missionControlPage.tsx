import { selectMission } from 'src/redux/appSlice';
import { useAppSelector } from 'src/redux/hooks';
import DetailCardNoImage from 'src/components/detailCardNoImage';
import DetailCardWithImage from 'src/components/detailCardWithImage';

const MissionControlPage = () => {
  const missionData = useAppSelector(selectMission);
  const { trip, driver, vehicle, vibe } = missionData;

  return (
    <div className='mission-control'>
      <DetailCardNoImage trip={trip} />
      <DetailCardWithImage driver={driver} />
      <DetailCardWithImage vehicle={vehicle} />
      <DetailCardWithImage trip={trip} vibe={vibe} />
    </div>
  );
};

export default MissionControlPage;
