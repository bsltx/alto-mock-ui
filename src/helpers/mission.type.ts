export interface MissionType {
  trip: TripType | null;
  driver: DriverType | null;
  vehicle: VehicleType | null;
  vibe: VibeType | null;
}

export interface TripType {
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

export interface LocationType {
  name: string;
  street_line1: string;
  street_line2: string;
  city: string;
  state: string;
  zipcode: string;
  lat: string;
  long: string;
}

export interface DriverType {
  name: string;
  image: string;
  bio: string;
  phone: string;
}

export interface VehicleType {
  license: string;
  make: string;
  color: string;
  image: string;
}

export interface VibeType {
  name: string;
}
