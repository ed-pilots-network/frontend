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

export type CommodityForm = {
  commodityId: {
    value: string;
  };
  system?: string;
  includeOrbital?: boolean;
  includePlanetary?: boolean;
  includeOdyssey?: boolean;
  includeFleetCarriers?: boolean;
  maxLandingPadSize: string;
  minSupply: number;
  maxSupply: number;
  minDemand: number;
  maxDemand: number;
};

// TODO: Recheck

export type BodiesForm = {
  bodiesId?: string;
  materials?: {
    value: string;
  }[];
  systemReserve?: string;
  ringType?: string;
  filterSystem?: string; // TODO: Not sure about this one. Confirm this.
  SystemIsPopulated?: string;
  powerInfluence?: string;
  bodyGroup?: {
    value: string;
  }[];
  hasRings?: string;
  planetType?: {
    value: string;
  }[];
  compactStarType?: {
    value: string;
  }[];
  maxDistanceToArrival?: string;
  arrivalStar?: boolean;
  starSpectralClass?: {
    value: string;
  }[];
  starLuminosityClass?: {
    value: string;
  }[];
  planetaryLanding?: string;
  extraColumn?: string;
  referenceSystem?: string;
  maximumReferenceDistance?: string;
};
