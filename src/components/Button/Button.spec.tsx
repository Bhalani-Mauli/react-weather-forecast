import { fireEvent } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import Button from "./Button";

describe("Button", () => {
  it("should have button on the screen", () => {
    const { getByText } = render(<Button>Search</Button>);
    const button = getByText("Search");
    expect(button).toBeInTheDocument();
  });
  it("should call props.onclick when clicking on the button", () => {
    const props = { onClick: jest.fn(), className: "ssds" };
    const { getByText } = render(<Button {...props}>Search</Button>);
    const button = getByText("Search");
    fireEvent.click(button);
    expect(props.onClick).toBeCalledTimes(1);
  });
});
