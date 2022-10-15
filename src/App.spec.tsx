import App from "./App";
import { render } from "./utils/test-utils";

describe("App", () => {
  it("renders the component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
