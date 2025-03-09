import { Pie, PieChart, ResponsiveContainer } from "recharts";
import styles from "../newusers.module.scss";
import { Statistics } from "../../../../../types";

type NewUsersPieChartProps = {
  data: Statistics;
};

export const NewUsersPieChart = ({ data }: NewUsersPieChartProps) => {
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
            data={data?.newUsers}
            dataKey="newUsers"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
