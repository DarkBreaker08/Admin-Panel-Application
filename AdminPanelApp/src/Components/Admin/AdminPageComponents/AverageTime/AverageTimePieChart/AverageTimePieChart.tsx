import { Pie, PieChart, ResponsiveContainer } from "recharts";
import styles from "../averagetime.module.scss";
import { Statistics } from "../../../../../types";

type AverageTimePieChartProps = {
  data: Statistics;
};

export const AverageTimePieChart = ({ data }: AverageTimePieChartProps) => {
  return (
    <>
      <h1 className={styles.title}>Pie Chart</h1>
      <ResponsiveContainer
        width={"80%"}
        className={styles.container}
        minHeight={300}
      >
        <PieChart>
          <Pie
            label
            data={data.averageTime}
            dataKey="averageTime"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
