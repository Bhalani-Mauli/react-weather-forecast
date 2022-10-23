import { types } from "@redux/types";
import { InitialStateType } from "types/app";
import { Action, ActionPayloadType } from "types/generic";

export const initialState: InitialStateType = {
  weather: undefined,
  errorMessage: undefined,
  current: 0,
  unit: "metric",
  unitMap: {
    imperial: {
      tempUnit: "°F",
      windUnit: "mph",
    },
    metric: {
      tempUnit: "°C",
      windUnit: "km/h",
    },
  },
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
    case types.CHANGE_UNIT:
      return {
        ...state,
        unit: state.unit === "metric" ? "imperial" : "metric",
      };
    default:
      return state;
  }
};
export default weatherReducer;
