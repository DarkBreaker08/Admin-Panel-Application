import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../newdownloads.module.scss";
import { Statistics } from "../../../../../types";

type NewDownloadsLineChartProps = {
  data: Statistics;
};

export const NewDownloadsLineChart = ({ data }: NewDownloadsLineChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Line Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <LineChart data={data.newDownloads}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="newDownloads"
            name="New Downloads"
            stroke="#5518BF"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
