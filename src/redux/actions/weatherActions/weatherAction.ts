import axios, { AxiosError } from "axios";
import moment from "moment";
import { Dispatch } from "redux";

import { types } from "@redux/types";
import { City, FilteredWeatherType, WeatherApi, WeatherItem } from "types/api";
import { WeatherReducerType } from "types/app";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData =
  (city: string) =>
  async (dispatch: Dispatch, getState: () => WeatherReducerType) => {
    const { unit } = getState().weather;
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;
    try {
      const res = await axios.get<WeatherApi>(API);
      dispatch({
        type: types.GET_WEATHER_DATA,
        payload: formatData(res.data),
      });
    } catch (err) {
      const errorMessage = getErrorMessageFromError(err);
      dispatch({
        type: types.GET_WEATHER_ERROR,
        payload: errorMessage,
      });
    }
  };

export const handleNavigateNext = () => {
  return {
    type: types.CARD_NAVIGATE_NEXT,
  };
};

export const handleNavigatePrev = () => {
  return {
    type: types.CARD_NAVIGATE_PREV,
  };
};

export const changeUnit = () => {
  return {
    type: types.CHANGE_UNIT,
  };
};

const getErrorMessageFromError = (err: Error | AxiosError | any) => {
  let errorMessage = "";
  if (err?.response && err.response?.status === 404) {
    errorMessage = "City Not Found";
  } else {
    errorMessage = "Something went wrong";
  }
  return errorMessage;
};

export const formatData = (data: WeatherApi) => {
  const filteredData = groupByDays(data);

  const formattedData = Object.keys(filteredData).map((itemKey) => {
    const weatherItems = filteredData[itemKey];
    const weatherDataPerDay: FilteredWeatherType = {
      calculatedData: { temp: 0, humdity: 0, pressure: 0, windSpeed: 0 },
      date: "",
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
    sunrise: unixTimeStampToTimeString(+sunrise, timezone),
    sunset: unixTimeStampToTimeString(+sunset, timezone),
  };
};

const unixTimeStampToTimeString = (timeStamp: number, timezone: number) => {
  const dateTime = moment.unix(timeStamp).utc().add(timezone, "s");
  return dateTime.format("HH:mm");
};

const getHourlyData = (data: WeatherItem[]) => {
  return data.map((i) => {
    const getDateRegex = /(\d\d?:\d\d)/i;
    const dateTime = i.dt_txt.match(getDateRegex)?.[0] as string;
    return { temp: i.main.temp, time: dateTime };
  });
};

const groupByDays = (data: WeatherApi) => {
  const initiaValue: Record<string, WeatherItem[]> = {};
  return data.list.reduce((list, item) => {
    const forecastDate = item.dt_txt.substring(0, 10);
    list[forecastDate] = list[forecastDate] || [];
    list[forecastDate].push(item);
    return list;
  }, initiaValue);
};

const getAverage = (
  data: WeatherItem[],
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
