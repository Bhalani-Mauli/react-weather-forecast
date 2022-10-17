import { types } from "@redux/types";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import configureMockStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from "redux-mock-store";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { getWeatherData } from "./weatherAction";
import mockWeatherData from "./mockData.json";
import { InitialStateType } from "@redux/reducers/weatherRecucer/weatherReducer";

type DispatchExts = ThunkDispatch<InitialStateType, void, AnyAction>;
const middlewares = [thunk];
const mockStore = configureMockStore<InitialStateType, DispatchExts>(
  middlewares
);

const weatherResponse = rest.get(
  `http://api.openweathermap.org/data/2.5/forecast`,
  (req, res, ctx) => {
    const city = req.url.searchParams.get("q");
    if (city == "Berlin") {
      return res(ctx.json(mockWeatherData));
    } else {
      return res(ctx.status(404));
    }
  }
);

describe("weatherAction", () => {
  let store: MockStoreEnhanced<InitialStateType, DispatchExts>;
  const server = setupServer(weatherResponse);

  beforeEach(() => {
    store = mockStore({
      weather: undefined,
      status: undefined,
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
        payload: mockWeatherData,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getWeatherData: should dispatch error when API call fails", async () => {
    await store.dispatch(getWeatherData("Unknown"));
    const expectedAction = [
      {
        type: types.GET_WEATHER_ERROR,
        payload: "Something went wrong",
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
