import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have *Weather app* on the screen", () => {
    const { getByText } = render(<App />);
    const title = getByText(/Weather app/i);
    expect(title).toBeInTheDocument();
  });
});
