import styles from "./revenue.module.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Typography } from "@mui/material";
import { Statistics } from "../../../../../types";

type RevenueChartProps = {
  data: Statistics;
};

export const RevenueChart = ({ data }: RevenueChartProps) => {
  if (!data) return;

  return (
    <>
      <Typography fontSize={25} className={styles.title}>
        February - Downloads and Revenue
      </Typography>
      <ResponsiveContainer
        width="80%"
        minHeight={400}
        className={styles.container}
      >
        <AreaChart data={data.revenueAndDownloads} margin={{ top: 40 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8064A1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8064A1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4AACC5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4AACC5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8064A1"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="downloads"
            stroke="#4AACC5"
            fillOpacity={1}
            fill="url(#colorDownloads)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
