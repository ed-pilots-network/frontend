export type StationForm = {
  stationId?: string;
  ships?: {
    value: string;
  }[];
  modules?: {
    value: string;
  }[];
  commodities?: {
    value: string;
  }[];
  system?: string;
  minorFaction?: string;
  allegiance?: string;
  government?: string;
  landingPadSize?: string;
  maxDistanceToArrival?: string;
  facilities?: {
    value: string;
  }[];
  stationType?: string;
  requiresPermit?: boolean;
  power?: string;
  powerEffect?: string;
  factionState?: string;
  economy?: string;
  nearestSystem?: string;
};
