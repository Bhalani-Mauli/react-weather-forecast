import { render } from "@utils/test-utils";
import WeatherCard from "./WeatherCard";

describe("Weatherapp", () => {
  it("should ", () => {
    const { getByText } = render(<WeatherCard />);
    expect(1).toBe(1);
  });
});
