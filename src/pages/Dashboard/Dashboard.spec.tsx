import { fireEvent, render } from "@utils/test-utils";
import Dashboard, { DashboardProptypes } from "./Dashboard";
import mockWeatherExpectedData from "@redux/actions/weatherActions/mockWeatherExpectedData.json";
import { initialState } from "@redux/reducers/weatherRecucer/weatherReducer";

describe("Dashboard", () => {
  let props: DashboardProptypes;
  beforeEach(() => {
    props = {
      getWeatherData: jest.fn(),
      weatherData: mockWeatherExpectedData.weatherData,
      cityData: mockWeatherExpectedData.cityData,
      handleNavigateNext: jest.fn(),
      handleNavigatePrev: jest.fn(),
      errorMessage: undefined,
      changeUnit: jest.fn(),
      unit: "metric",
      unitMap: initialState.unitMap,
      switchMap: { imperial: false, metric: true },
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

  it("should have error message on the screen", () => {
    const newProps = {
      ...props,
      errorMessage: "Something went wrong",
    };
    const { getByText } = render(<Dashboard {...newProps} />);
    const errorMessage = getByText("Something went wrong");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should call getWeatherData() if unit changes and weatherdata/cityData is present", () => {
    const { rerender } = render(<Dashboard {...props} />);
    const newProps = { ...props, unit: "imperial" as "imperial" | "metric" };
    rerender(<Dashboard {...newProps} />);
    expect(props.getWeatherData).toHaveBeenCalled();
  });

  it("should not call getWeatherData() if unit changes and weatherdata/cityData is not present", () => {
    const newProps = { ...props, cityData: undefined };
    const { rerender } = render(<Dashboard {...newProps} />);
    const changedUnitProps = {
      ...newProps,
      unit: "imperial" as "imperial" | "metric",
    };
    rerender(<Dashboard {...changedUnitProps} />);
    expect(props.getWeatherData).not.toHaveBeenCalled();
  });

  it("should call changeUnit when clicking on switch", () => {
    const { getByTestId } = render(<Dashboard {...props} />);
    const unitSwitch = getByTestId("unit-switch");
    fireEvent.click(unitSwitch);
    expect(props.changeUnit).toHaveBeenCalled();
  });
});
