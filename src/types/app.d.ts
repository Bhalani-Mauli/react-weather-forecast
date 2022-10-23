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
  errorMessage?: string;
  current: number;
  unit: "imperial" | "metric";
  unitMap: UnitMap;
};

export interface WeatherReducerType {
  weather: InitialStateType;
}
export interface ChartType {
  name: string;
  temprature: number;
}
