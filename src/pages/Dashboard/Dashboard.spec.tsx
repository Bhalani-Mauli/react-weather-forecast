import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("should have *React Weather App* on the screen", () => {
    const { getByText } = render(<Dashboard />);
    const title = getByText(/React Weather App/i);
    expect(title).toBeInTheDocument();
  });
});
