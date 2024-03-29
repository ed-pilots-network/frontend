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
  startSystem?: { value: number };
  startStation?: string;
  finishSystem?: { value: number };
  maxHopCount?: string;
};

export type TradeRouteFilters = {
  commodities?: {
    value: string;
  }[];
  maxHopDistance?: string;
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
