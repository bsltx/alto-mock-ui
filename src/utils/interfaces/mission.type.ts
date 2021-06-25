export interface MissionType {
  trip: TripType;
  driver: DriverType;
  vehicle: VehicleType;
  vibe: VibeType;
}

interface TripType {
  estimated_arrival: string;
  estimated_fare_min: number;
  estimated_fare_max: number;
  passengers_min: number;
  passengers_max: number;
  payment: string;
  dropoff_location: LocationType;
  pickup_location: LocationType;
  notes: string;
}

interface LocationType {
  name: string;
  street_line1: string;
  street_line2: string;
  city: string;
  state: string;
  zipcode: string;
  lat: string;
  long: string;
}

interface DriverType {
  name: string;
  image: string;
  bio: string;
  phone: string;
}

interface VehicleType {
  license: string;
  make: string;
  color: string;
  image: string;
}

interface VibeType {
  name: string;
}
