import { render } from "@utils/test-utils";
import Chart from "./Chart";

describe("Chart", () => {
  it("should have button on the screen", () => {
    const chartData = [
      {
        temprature: 26,
        name: "Day 22",
      },
      {
        temprature: 25,
        name: "Day 23",
      },
    ];
    const props = { chartData };
    const { getByText } = render(<Chart {...props} />);
    const chartText = getByText("Day 22");
    expect(chartText).toBeInTheDocument();
  });
});
