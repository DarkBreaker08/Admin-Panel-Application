import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../newusers.module.scss";
import { Statistics } from "../../../../../types";

type NewUsersLineChartProps = {
  data: Statistics;
};

export const NewUsersLineChart = ({ data }: NewUsersLineChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Line Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <LineChart data={data?.newUsers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="newUsers" stroke="#5518BF" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
