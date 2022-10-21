import { fireEvent, render } from "@utils/test-utils";
import Dashboard, { DashboardProptypes } from "./Dashboard";
import mockWeatherExpectedData from "@redux/actions/weatherActions/mockWeatherExpectedData.json";

describe("Dashboard", () => {
  let props: DashboardProptypes;
  beforeEach(() => {
    props = {
      getWeatherData: jest.fn(),
      weatherData: mockWeatherExpectedData.weatherData,
      cityData: mockWeatherExpectedData.cityData,
      handleNavigateNext: jest.fn(),
      handleNavigatePrev: jest.fn(),
    };
  });

  it("should have *React Weather App* on the screen", () => {
    const { getByText } = render(<Dashboard {...props} />);
    const title = getByText(/React Weather App/i);
    expect(title).toBeInTheDocument();
  });

  it("should have input on the screen", () => {
    const { getByTestId } = render(<Dashboard {...props} />);
    const searchBar = getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("should have Arrows on the screen", () => {
    const { getByTestId } = render(<Dashboard {...props} />);
    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it("should call handleNavigateNext and handleNavigatePrev by clicking on prev and next", () => {
    const { getByTestId } = render(<Dashboard {...props} />);
    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");
    fireEvent.click(leftArrow);
    fireEvent.click(rightArrow);
    expect(props.handleNavigateNext).toHaveBeenCalledTimes(1);
    expect(props.handleNavigatePrev).toHaveBeenCalledTimes(1);
  });
});
