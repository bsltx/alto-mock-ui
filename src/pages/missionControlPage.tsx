import { selectMission } from 'src/redux/appSlice';
import { useAppSelector } from 'src/redux/hooks';
import DetailCardNoImage from 'src/components/detailCardNoImage';
import DetailCardWithImage from 'src/components/detailCardWithImage';

interface MissionControlPageProps {
  navIds: Array<string>;
}

const MissionControlPage = ({ navIds }: MissionControlPageProps) => {
  const missionData = useAppSelector(selectMission);
  const { trip, driver, vehicle, vibe } = missionData;

  return (
    <div className='mission-control'>
      <DetailCardNoImage trip={trip} id={navIds[0]} />
      <DetailCardWithImage driver={driver} id={navIds[1]} />
      <DetailCardWithImage vehicle={vehicle} id={navIds[2]} />
      <DetailCardWithImage trip={trip} vibe={vibe} id={navIds[3]} />
    </div>
  );
};

export default MissionControlPage;
