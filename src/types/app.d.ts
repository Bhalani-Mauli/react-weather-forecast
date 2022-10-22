interface Units {
  tempUnit: string;
  windUnit: string;
}
export interface UnitMap {
  imperial: Units;
  metric: Units;
}
export type InitialStateType = {
  weather?: WeatherApi;
  status?: string;
  current: number;
  unit: string;
  unitMap: UnitMap;
};

export interface WeatherReducerType {
  weather: InitialStateType;
}
