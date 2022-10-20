import { render } from "@utils/test-utils";
import WeatherCard from "./WeatherCard";
import mockWeatherExpectedData from "@redux/actions/weatherActions/mockWeatherExpectedData.json";

describe("Weatherapp", () => {
  it("render the weather component ", () => {
    const props = {
      weatherData: mockWeatherExpectedData.weatherData[0],
      cityData: mockWeatherExpectedData.cityData,
    };
    const { asFragment } = render(<WeatherCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
