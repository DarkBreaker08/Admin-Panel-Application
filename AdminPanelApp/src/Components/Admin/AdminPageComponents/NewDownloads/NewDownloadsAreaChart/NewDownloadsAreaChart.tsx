import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../newdownloads.module.scss";
import { Statistics } from "../../../../../types";

type NewDownloadsAreaChartProps = {
  data: Statistics;
};

export const NewDownloadsAreaChart = ({ data }: NewDownloadsAreaChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Area Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <AreaChart data={data.newDownloads}>
          <defs>
            <linearGradient id="colorNewDownloads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E91E63" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E91E63" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="newDownloads"
            name="New Downloads"
            stroke="#E91E63"
            fillOpacity={1}
            fill="url(#colorNewDownloads)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
