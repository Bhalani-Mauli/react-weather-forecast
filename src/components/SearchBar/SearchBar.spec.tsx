import { fireEvent } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should have input on the screen", () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId("search-bar");
    expect(input).toBeInTheDocument();
  });
  it("should change value while typing on searchInput", () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId("search-bar") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
  it("should have button on the screen", () => {
    const { getByText } = render(<SearchBar />);
    const button = getByText("Search");
    expect(button).toBeInTheDocument();
  });
});
