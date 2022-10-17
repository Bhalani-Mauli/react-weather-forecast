import { render } from "@utils/test-utils";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("should have *React Weather App* on the screen", () => {
    const props = { getWeatherData: jest.fn() };
    const { getByText } = render(<Dashboard {...props} />);
    const title = getByText(/React Weather App/i);
    expect(title).toBeInTheDocument();
  });
});
