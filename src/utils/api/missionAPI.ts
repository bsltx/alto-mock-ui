import missionData from 'src/assets/data/mission.json';

import { MissionType } from 'src/utils/interfaces/mission.type';

// A mock function to mimic making an async request for data
export const fetchMission = () => {
  return new Promise<{ data: MissionType }>((resolve) =>
    setTimeout(() => resolve({ data: missionData }), 500)
  );
};
