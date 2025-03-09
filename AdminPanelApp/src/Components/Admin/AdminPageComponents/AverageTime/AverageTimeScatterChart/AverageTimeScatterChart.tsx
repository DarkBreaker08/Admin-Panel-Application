import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../averagetime.module.scss";
import { Statistics } from "../../../../../types";

type AverageTimeScatterProps = {
  data: Statistics;
};

export const AverageTimeScatterChart = ({ data }: AverageTimeScatterProps) => {
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
            data={data.averageTime}
            fill="#214162"
            name="Average Time Spent (minutes)"
            dataKey="averageTime"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
