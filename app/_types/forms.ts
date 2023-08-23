export type ShipForm = {
  buySystem?: string;
  buyStation?: string;
  sellSystem?: string;
  sellStation?: string;
};

export type SingleTradeRouteForm = TradeRouteFilters & {
  buySystem?: { value: number };
  buyStation?: string;
  sellSystem?: { value: number };
  sellStation?: string;
};

export type MultiTradeRouteForm = TradeRouteFilters & {
  startSystem: string;
  startStation?: string;
  endSystem?: string;
};

export type TradeRouteFilters = {
  commodities?: {
    value: string;
  }[];
  minSupply?: string;
  minDemand?: string;
  maxPriceAge?: string;
  cargoCapacity?: string;
  availableCredits?: string;

  government?: string;
  allegiance?: string;
  requiresPermit?: boolean;
  landingPadSize?: string;
  maxDistanceToArrival?: string;
  stationType?: string;
  power?: string;
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
