import { format } from 'date-fns';
import missionData from 'src/assets/data/mission.json';
import { LocationType, MissionType } from 'src/helpers/mission.type';

// A mock function to mimic making an async request for data
export const fetchMission = () => {
  return new Promise<{ data: MissionType }>((resolve) =>
    setTimeout(() => resolve({ data: missionData }), 500)
  );
};

// Converts a GMT date-time string to ##:## AM format
export const dateStringToShortTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'p');
};

// Returns a single-line City, State ZIP string
export const cityStateZipString = (location: LocationType) => {
  const { city, state, zipcode } = location;
  return `${city}, ${state} ${zipcode}`;
};
