export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface WeatherItem {
  [x: string]: any;
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number | string;
  sunset: number | string;
}

export interface WeatherApi {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
  city: City;
}

interface CalculatedDataType {
  temp: number;
  humdity: number;
  pressure: number;
  windSpeed: number;
}
interface HourlyWeatherType {
  temp: number;
  time: string;
}
export interface FilteredWeatherType {
  calculatedData: CalculatedDataType;
  hourly?: HourlyWeatherType[];
  date: string;
}
