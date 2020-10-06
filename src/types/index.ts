
interface Location {
  city: string;
  postalCode: string;
  coordinates: LatLng;
  country: string;
  timeZone: string;
}

export interface AddressData {
  ip: string;
  isp: string;
  location: Location;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Err {
  status: number;
  message: string;
}