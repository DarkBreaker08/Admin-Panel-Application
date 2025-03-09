import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../revenue.module.scss";
import { Statistics } from "../../../../../types";

type RevenueAreaChartProps = {
  data: Statistics;
};

export const RevenueAreaChart = ({ data }: RevenueAreaChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Area Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <AreaChart data={data.revenue}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
            dataKey="revenue"
            name="Revenue"
            stroke="#E91E63"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
