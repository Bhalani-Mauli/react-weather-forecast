import { types } from "@redux/types";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import { rest } from "msw";
import { setupServer } from "msw/node";

import {
  changeUnit,
  formatData,
  getWeatherData,
  handleNavigateNext,
  handleNavigatePrev,
} from "./weatherAction";
import mockWeatherData from "./mockData.json";
import mockWeatherExpectedData from "./mockWeatherExpectedData.json";
import { initialState } from "@redux/reducers/weatherRecucer/weatherReducer";
import { WeatherReducerType } from "types/app";

type DispatchExts = ThunkDispatch<WeatherReducerType, void, AnyAction>;
const middlewares = [thunk];
const mockStore = configureMockStore<WeatherReducerType, DispatchExts>(
  middlewares
);

const weatherResponse = rest.get(
  `https://api.openweathermap.org/data/2.5/forecast`,
  (req, res, ctx) => {
    const city = req.url.searchParams.get("q");
    if (city == "Berlin") {
      return res(ctx.json(mockWeatherData));
    } else if (city == "PostDam") {
      return res(ctx.status(500));
    } else {
      return res(ctx.status(404));
    }
  }
);

describe("weatherAction with mock API", () => {
  let store: MockStoreEnhanced<WeatherReducerType, DispatchExts>;
  const server = setupServer(weatherResponse);

  beforeEach(() => {
    store = mockStore({
      weather: initialState,
    });
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("getWeatherData: should dispatch proper type with payload", async () => {
    await store.dispatch(getWeatherData("Berlin"));
    const expectedAction = [
      {
        type: types.GET_WEATHER_DATA,
        payload: mockWeatherExpectedData,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getWeatherData: should dispatch error when API call fails", async () => {
    await store.dispatch(getWeatherData("Unknown"));
    const expectedAction = [
      {
        type: types.GET_WEATHER_ERROR,
        payload: "City Not Found",
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getWeatherData: should dispatch error when API call fails", async () => {
    await store.dispatch(getWeatherData("PostDam"));
    const expectedAction = [
      {
        type: types.GET_WEATHER_ERROR,
        payload: "Something went wrong",
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe("weatherAction withhout API", () => {
  let store: MockStoreEnhanced<WeatherReducerType, DispatchExts>;

  beforeEach(() => {
    store = mockStore({
      weather: initialState,
    });
  });
  it("should return correct type for handleNavigateNext", () => {
    store.dispatch(handleNavigateNext());
    expect(store.getActions()).toEqual([{ type: types.CARD_NAVIGATE_NEXT }]);
  });

  it("should return correct type for handleNavigateNext", () => {
    store.dispatch(handleNavigatePrev());
    expect(store.getActions()).toEqual([{ type: types.CARD_NAVIGATE_PREV }]);
  });

  it("should return correct type for changeUnit", () => {
    store.dispatch(changeUnit());
    expect(store.getActions()).toEqual([{ type: types.CHANGE_UNIT }]);
  });
});

describe("weatherAction formatter", () => {
  it("should return formatted data by calling formatData", () => {
    const result = formatData(mockWeatherData);
    expect(result).toEqual(mockWeatherExpectedData);
  });
});
