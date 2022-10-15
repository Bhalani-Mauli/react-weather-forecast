import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
