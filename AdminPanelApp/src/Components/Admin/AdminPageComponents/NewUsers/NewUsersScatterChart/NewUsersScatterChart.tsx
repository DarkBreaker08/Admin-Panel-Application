import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../newusers.module.scss";
import { Statistics } from "../../../../../types";

type NewUsersScatterChartProps = {
  data: Statistics;
};

export const NewUsersScatterChart = ({ data }: NewUsersScatterChartProps) => {
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
            data={data?.newUsers}
            fill="#214162"
            name="Number of newUsers"
            dataKey="newUsers"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
