import { Navigate } from "react-router";
import { useGetStatisticsQuery } from "../../../../queries/useGetStatisticsQuery";
import { Footer } from "../../../GeneralComponents/Footer";
import { Title } from "../../../GeneralComponents/Title";
import { AverageTimeAreaChart } from "./AverageTimeAreaChart/AverageTimeAreaChart";
import { AverageTimeLineChart } from "./AverageTimeLineChart/AverageTimeLineChart";
import { AverageTimePieChart } from "./AverageTimePieChart/AverageTimePieChart";
import { AverageTimeScatterChart } from "./AverageTimeScatterChart/AverageTimeScatterChart";
import { Statistics } from "../../../../types";

export const AverageTime = () => {
  const currentYear = new Date().getFullYear();
  const { data, isLoading } = useGetStatisticsQuery();
  if (!data && !isLoading) return <Navigate to="/error" />;

  return (
    <>
      <Title>Average Time - Feburary {currentYear}</Title>
      <AverageTimeLineChart data={data as Statistics} />
      <AverageTimeAreaChart data={data as Statistics} />
      <AverageTimeScatterChart data={data as Statistics} />
      <AverageTimePieChart data={data as Statistics} />

      <Footer />
    </>
  );
};
