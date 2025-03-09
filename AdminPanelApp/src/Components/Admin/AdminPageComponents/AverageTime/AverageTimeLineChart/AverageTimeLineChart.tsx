import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../averagetime.module.scss";
import { Statistics } from "../../../../../types";

type AverageTimeLineChartProps = {
  data: Statistics;
};

export const AverageTimeLineChart = ({ data }: AverageTimeLineChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Line Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <LineChart data={data.averageTime}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="averageTime"
            name="Average Time Spent (minutes)"
            stroke="#5518BF"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
