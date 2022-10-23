import { types } from "@redux/types";
import { InitialStateType } from "types/app";
import weatherReducer, { initialState } from "./weatherReducer";

describe("weatherReducer", () => {
  it(`returns the default state from the store when an invalid action is passed`, () => {
    const newState = weatherReducer(undefined, { type: "unknown" });
    expect(newState).toEqual(initialState);
  });

  it(`returns the weatherData when GET_WEATHER_DATA is being called with data'`, () => {
    const actionPayload = {
      type: types.GET_WEATHER_DATA,
      payload: { data: { weatherData: {} } },
    };
    const newState = weatherReducer(undefined, actionPayload);
    const expectedOutput = {
      ...initialState,
      weather: { data: { weatherData: {} } },
      errorMessage: null,
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
      ...initialState,
      weather: undefined,
      errorMessage: "Api is invalid",
    };
    expect(newState).toEqual(expectedOutput);
  });

  it("should update current when we get CARD_NAVIGATE_NEXT", () => {
    const newState = weatherReducer(undefined, {
      type: types.CARD_NAVIGATE_NEXT,
    });
    const expectedOutput = {
      ...initialState,
      current: 2,
    };
    expect(newState).toEqual(expectedOutput);
  });

  it("should update current when we get CARD_NAVIGATE_PREV", () => {
    const currentState = { ...initialState, current: 2 };
    const newState = weatherReducer(currentState, {
      type: types.CARD_NAVIGATE_PREV,
    });
    const expectedOutput = {
      ...initialState,
      current: 0,
    };
    expect(newState).toEqual(expectedOutput);
  });

  it("should not go nagative value when clicking on CARD_NAVIGATE_PREV", () => {
    const newState = weatherReducer(undefined, {
      type: types.CARD_NAVIGATE_PREV,
    });
    const expectedOutput = {
      ...initialState,
      current: 0,
    };
    expect(newState).toEqual(expectedOutput);
  });

  it("should not exceed 2 value when clicking on CARD_NAVIGATE_NEXT", () => {
    const currentState = { ...initialState, current: 2 };
    const newState = weatherReducer(currentState, {
      type: types.CARD_NAVIGATE_NEXT,
    });
    const expectedOutput = {
      ...initialState,
      current: 2,
    };
    expect(newState).toEqual(expectedOutput);
  });
  it("should change unit when we receive CHANGE_UNIT", () => {
    const newState = weatherReducer(undefined, {
      type: types.CHANGE_UNIT,
    });
    const expectedOutput = {
      ...initialState,
      unit: "imperial",
    };
    expect(newState).toEqual(expectedOutput);
  });
  it("should change unit again when we receive CHANGE_UNIT", () => {
    const currentState = {
      ...initialState,
      unit: "imperial",
    } as InitialStateType;
    const newState = weatherReducer(currentState, {
      type: types.CHANGE_UNIT,
    });
    const expectedOutput = {
      ...initialState,
      unit: "metric",
    };
    expect(newState).toEqual(expectedOutput);
  });
});
