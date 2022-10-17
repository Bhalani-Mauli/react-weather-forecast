import { types } from "@redux/types";
import weatherReducer, { initialState } from "./weatherReducer";

describe("weatherReducer", () => {
  it(`returns the default state from the store when an invalid action is passed`, () => {
    const newState = weatherReducer(undefined, { type: "unknown" });
    expect(newState).toEqual(initialState);
  });

  it(`returns the weatherData when GET_WEATHER_DATA is being called with data'`, () => {
    const actionPayload = {
      type: types.GET_WEATHER_DATA,
      payload: { data: { weatherData: true } },
    };
    const newState = weatherReducer(undefined, actionPayload);
    const expectedOutput = {
      weather: { data: { weatherData: true } },
      status: "success",
    };
    expect(newState).toEqual(expectedOutput);
  });

  it(`returns the Error when GET_WEATHER_ERROR is being called with data'`, () => {
    const actionPayload = {
      type: types.GET_WEATHER_ERROR,
      payload: "Api is invalid",
    };
    const newState = weatherReducer(undefined, actionPayload);
    const expectedOutput = {
      weather: null,
      status: "Api is invalid",
    };
    expect(newState).toEqual(expectedOutput);
  });
});
