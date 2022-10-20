import axios from "axios";
import moment from "moment";
import { Dispatch } from "redux";

import { types } from "@redux/types";
import { City, FilteredWeatherType, WeatherApi, WeatherList } from "types/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = (city: string) => async (dispatch: Dispatch) => {
  const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const res = await axios.get<WeatherApi>(API);
    dispatch({
      type: types.GET_WEATHER_DATA,
      payload: formatData(res.data),
    });
  } catch (err) {
    dispatch({
      type: types.GET_WEATHER_ERROR,
      payload: "Something went wrong",
    });
  }
};

export const formatData = (data: WeatherApi) => {
  const filteredData = groupByDays(data);

  const formattedData = Object.keys(filteredData).map((itemKey) => {
    const weatherItems = filteredData[itemKey];
    const weatherDataPerDay: FilteredWeatherType = {
      calculatedData: { temp: 0, humdity: 0, pressure: 0, windSpeed: 0 },
    };
    weatherDataPerDay.calculatedData = getAverage(weatherItems);
    weatherDataPerDay.hourly = getHourlyData(weatherItems);
    weatherDataPerDay.date = itemKey;
    return weatherDataPerDay;
  });

  return { weatherData: formattedData, cityData: formatCityData(data.city) };
};

const formatCityData = (city: City) => {
  const { sunrise, sunset, timezone } = city;
  return {
    ...city,
    sunrise: unixTimeStampToTimeString(sunrise, timezone),
    sunset: unixTimeStampToTimeString(sunset, timezone),
  };
};

const unixTimeStampToTimeString = (timeStamp: number, timezone: number) => {
  const dateTime = moment.unix(timeStamp).utc().add(timezone, "s");
  return dateTime.format("HH:mm");
};

const getHourlyData = (data: WeatherList[]) => {
  return data.map((i) => {
    const getDateRegex = /(\d\d?:\d\d)/i;
    const dateTime = i.dt_txt.match(getDateRegex)?.[0] as string;
    return { temp: i.main.temp, time: dateTime };
  });
};

const groupByDays = (data: WeatherApi) => {
  const initiaValue: Record<string, WeatherList[]> = {};
  return data.list.reduce((list, item) => {
    const forecastDate = item.dt_txt.substring(0, 10);
    list[forecastDate] = list[forecastDate] || [];
    list[forecastDate].push(item);
    return list;
  }, initiaValue);
};

const getAverage = (
  data: WeatherList[],
  humidity: number[] = [],
  pressure: number[] = [],
  windSpeed: number[] = [],
  temp: number[] = []
) => {
  data.forEach((item) => {
    humidity.push(item.main.humidity);
    temp.push(item.main.temp);
    pressure.push(item.main.pressure);
    windSpeed.push(item.wind.speed);
  });

  // Gets the day's average humdity
  const avgHumdity = Math.round(
    humidity.reduce((curr, next) => curr + next) / humidity.length
  );

  const avgPressure = Math.round(
    pressure.reduce((curr, next) => curr + next) / pressure.length
  );

  const avgTemp = Math.round(
    temp.reduce((curr, next) => curr + next) / temp.length
  );

  const avgWindSpeed = Math.round(
    windSpeed.reduce((curr, next) => curr + next) / windSpeed.length
  );

  return {
    temp: avgTemp,
    humdity: avgHumdity,
    pressure: avgPressure,
    windSpeed: avgWindSpeed,
  };
};
