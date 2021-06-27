import { useEffect, useState } from 'react';
import LogoHeader from './components/logoHeader';
import MissionControlPage from './pages/missionControlPage';
import BottomNav from './components/bottomNav';
import LoadingIndicator from 'src/components/loadingIndicator';
import { getMissionData, selectStatus } from './redux/appSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const [showEnRoute, setShowEnRoute] = useState(false);

  useEffect(() => {
    dispatch(getMissionData());

    window.onscroll = () => {
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
        ? setShowEnRoute(true)
        : setShowEnRoute(false);
    };
  }, [dispatch]);

  return (
    <div className='app'>
      <>
        <LogoHeader />
        {status === 'loading' ? <LoadingIndicator /> : <MissionControlPage />}
        <BottomNav showEnRoute={showEnRoute} />
      </>
    </div>
  );
};

export default App;
