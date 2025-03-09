import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../revenue.module.scss";
import { Statistics } from "../../../../../types";

type RevenueScatterChartProps = {
  data: Statistics;
};

export const RevenueScatterChart = ({ data }: RevenueScatterChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Scatter Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            data={data.revenue}
            fill="#214162"
            name="Revenue"
            dataKey="revenue"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
