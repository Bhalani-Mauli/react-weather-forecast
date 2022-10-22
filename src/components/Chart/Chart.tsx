import devices from "@utils/media";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import { ChartType } from "types/app";

interface ChartPropTypes {
  chartData: ChartType[];
}
const Chart = ({ chartData }: ChartPropTypes) => {
  return (
    <StyledLineChart
      width={600}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="temprature" stroke="#8884d8" />
      <CartesianGrid stroke="#ccccccbc" strokeDasharray="2 2" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </StyledLineChart>
  );
};
const StyledLineChart = styled(LineChart)`
  margin: 20px auto;
  display: none;
  @media ${devices.mobileL} {
    display: block;
  }
`;

export default Chart;
