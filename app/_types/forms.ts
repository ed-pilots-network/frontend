export type SystemForm = {
  systemId?: string;
  onlyPopulated?: boolean;
  allegiance?: string;
  government?: string;
  economy?: string;
  minorFaction?: string;
  stationFilter?: string;
  power?: string;
  powerEffect?: string;
  security?: string;
  factionState?: string;
  requiresPermit?: boolean;
};

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
