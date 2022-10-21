import { types } from "@redux/types";
import { WeatherApi } from "types/api";
import { Action, ActionPayloadType } from "types/generic";

export type InitialStateType = {
  weather?: WeatherApi;
  status?: string;
  current: number;
};

export const initialState = {
  weather: null,
  errorMessage: null,
  current: 0,
};

const handleIncrement = (current: number) => {
  if (current >= 2) return current;
  return current + 2;
};

const handleDecrement = (current: number) => {
  if (current <= 0) return current;
  return current - 2;
};

const weatherReducer = (
  state = initialState,
  action: Action<string, ActionPayloadType>
) => {
  switch (action.type) {
    case types.GET_WEATHER_DATA:
      return { ...state, weather: action.payload, errorMessage: null };
    case types.GET_WEATHER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case types.CARD_NAVIGATE_NEXT:
      return { ...state, current: handleIncrement(state.current) };
    case types.CARD_NAVIGATE_PREV:
      return { ...state, current: handleDecrement(state.current) };
    default:
      return state;
  }
};
export default weatherReducer;
