import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../newdownloads.module.scss";
import { Statistics } from "../../../../../types";

type NewDownloadsScatterChartProps = {
  data: Statistics;
};

export const NewDownloadsScatterChart = ({
  data,
}: NewDownloadsScatterChartProps) => {
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
            data={data.newDownloads}
            fill="#214162"
            name="New Downloads"
            dataKey="newDownloads"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
