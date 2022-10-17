import { render } from "@utils/test-utils";
import WeatherCard from "./WeatherCard";

describe("Weatherapp", () => {
  it("render the weather component ", () => {
    const { asFragment } = render(<WeatherCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
