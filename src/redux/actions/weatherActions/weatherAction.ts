import axios, { AxiosError } from "axios";
import { types } from "@redux/types";
import { Dispatch } from "redux";
import { WeatherApi } from "types/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = (city: string) => async (dispatch: Dispatch) => {
  const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const res = await axios.get(API);
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

const formatData = (data: WeatherApi) => {
  //format data
  return data;
};
