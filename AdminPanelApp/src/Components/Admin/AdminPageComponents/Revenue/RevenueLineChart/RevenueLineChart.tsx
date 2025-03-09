import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../revenue.module.scss";
import { Statistics } from "../../../../../types";

type RevenueLineChartProps = {
  data: Statistics;
};

export const RevenueLineChart = ({ data }: RevenueLineChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Line Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <LineChart data={data.revenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#5518BF"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
