import { render } from "@utils/test-utils";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("should have *React Weather App* on the screen", () => {
    const props = { getWeatherData: jest.fn() };
    const { getByText } = render(<Dashboard {...props} />);
    const title = getByText(/React Weather App/i);
    expect(title).toBeInTheDocument();
  });
  it("should have input on the screen", () => {
    const props = { getWeatherData: jest.fn() };
    const { getByTestId } = render(<Dashboard {...props} />);
    const searchBar = getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });
  it("should have Arrows on the ", () => {
    const props = { getWeatherData: jest.fn(), className: "ssds" };
    const { getByTestId } = render(<Dashboard {...props} />);
    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });
});
