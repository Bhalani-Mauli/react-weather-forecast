import { fireEvent } from "@testing-library/react";
import { render } from "@utils/test-utils";
import SearchBar, { PropTypes } from "./SearchBar";

describe("SearchBar", () => {
  let props: PropTypes;
  beforeEach(() => {
    props = {
      onSearchHandler: jest.fn(),
      searchInput: "Tunis",
      setSearchInput: jest.fn(),
    };
  });
  it("should have input on the screen", () => {
    const { getByTestId } = render(<SearchBar {...props} />);
    const input = getByTestId("search-bar");
    expect(input).toBeInTheDocument();
  });
  it("should change value while typing on searchInput", () => {
    const { getByTestId } = render(<SearchBar {...props} />);
    const input = getByTestId("search-bar") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(props.setSearchInput).toHaveBeenCalled();
  });
  it("should call onSearchHandler when clicking on button", () => {
    const { getByText } = render(<SearchBar {...props} />);
    const searchButton = getByText("Search");
    fireEvent.click(searchButton);
    expect(props.onSearchHandler).toHaveBeenCalled();
  });
});
