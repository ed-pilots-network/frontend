export interface ICommodity {
  commodityName: string;
  displayName: string;
  type: string;
  isRare: boolean;
}

export interface ICommodityFormRequest {
  commodityDisplayName: {
    value: string;
  };
  maxLandingPadSize: string;
  minSupply: number;
  maxSupply: number;
  minDemand: number;
  maxDemand: number;
  system?: string;
  includeOrbital?: boolean;
  includePlanetary?: boolean;
  includeOdyssey?: boolean;
  includeFleetCarriers?: boolean;
}

export interface ICommodityFormResponse {
  commodityDisplayName: string;
  station: {
    name: string;
    arrivalDistance: number;
    maxLandingPadSize: string;
    fleetCarrier: boolean;
    requireOdyssey: boolean;
    planetary: boolean;
  };
  systemName: string;
  pricesUpdatedAt: string;
  supply: number;
  demand: number;
  buyPrice: number;
  sellPrice: number;
  distance: number;
}
