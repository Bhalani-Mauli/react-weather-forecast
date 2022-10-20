import { types } from "@redux/types";
import { WeatherApi } from "types/api";
import { Action, ActionPayloadType } from "types/generic";

export type InitialStateType = {
  weather?: WeatherApi;
  status?: string;
};

export const initialState = {
  weather: null,
  status: null,
  current: 0,
};

const weatherReducer = (
  state = initialState,
  action: Action<string, ActionPayloadType>
) => {
  switch (action.type) {
    case types.GET_WEATHER_DATA:
      return { ...state, weather: action.payload, status: "success" };
    case types.GET_WEATHER_ERROR:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default weatherReducer;
