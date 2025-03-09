import { Navigate } from "react-router";
import { useGetStatisticsQuery } from "../../../../queries/useGetStatisticsQuery";
import { Footer } from "../../../GeneralComponents/Footer";
import { Title } from "../../../GeneralComponents/Title";
import { RevenueAreaChart } from "./RevenueAreaChart/RevenueAreaChart";
import { RevenueLineChart } from "./RevenueLineChart/RevenueLineChart";
import { RevenuePieChart } from "./RevenuePieChart/RevenuePieChart";
import { RevenueScatterChart } from "./RevenueScatterChart/RevenueScatterChart";
import { Statistics } from "../../../../types";

export const Revenue = () => {
  const currentYear = new Date().getFullYear();
  const { data, isLoading } = useGetStatisticsQuery();
  if (!data && !isLoading) return <Navigate to="/error" />;

  return (
    <>
      <Title>Revenue - Feburary {currentYear}</Title>
      <RevenueLineChart data={data as Statistics} />
      <RevenueAreaChart data={data as Statistics} />
      <RevenueScatterChart data={data as Statistics} />
      <RevenuePieChart data={data as Statistics} />
      <Footer />
    </>
  );
};
