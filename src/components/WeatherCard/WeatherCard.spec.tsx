import { render } from "@utils/test-utils";
import WeatherCard from "./WeatherCard";
import mockWeatherExpectedData from "@redux/actions/weatherActions/mockWeatherExpectedData.json";

jest.mock("moment", () => {
  return () => jest.requireActual("moment")("2022-10-16T00:00:00.000Z");
});

describe("Weatherapp", () => {
  it("render the weather component ", () => {
    const props = {
      weatherData: mockWeatherExpectedData.weatherData[0],
      cityData: mockWeatherExpectedData.cityData,
      tempUnit: "C",
      windUnit: "km/h",
    };
    const { asFragment } = render(<WeatherCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
