export interface ISystem {
  eliteId: number;
  name: string;
  xcoordinate: number;
  ycoordinate: number;
  zcoordinate: number;
}

export interface IStation {
  marketId: number;
  name: string;
  arrivalDistance: number;
  maxLandingPadSize: string;
  fleetCarrier: boolean;
  requireOdyssey: boolean;
  planetary: boolean;
  marketUpdatedAt: string;
  system: ISystem;
}
