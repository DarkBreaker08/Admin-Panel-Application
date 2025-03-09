import { Navigate } from "react-router";
import { useGetStatisticsQuery } from "../../../../queries/useGetStatisticsQuery";
import { Footer } from "../../../GeneralComponents/Footer";
import { Title } from "../../../GeneralComponents/Title";
import { NewUsersAreaChart } from "./NewUsersAreaChart/NewUsersAreaChart";
import { NewUsersLineChart } from "./NewUsersLineChart/NewUsersLineChart";
import { NewUsersPieChart } from "./NewUsersPieChart/NewUsersPieChart";
import { NewUsersScatterChart } from "./NewUsersScatterChart/NewUsersScatterChart";
import { Statistics } from "../../../../types";

export const NewUsers = () => {
  const currentYear = new Date().getFullYear();
  const { data, isLoading } = useGetStatisticsQuery();
  if (!data && !isLoading) return <Navigate to="/error" />;

  return (
    <>
      <Title>New Users - Feburary {currentYear}</Title>
      <NewUsersLineChart data={data as Statistics} />
      <NewUsersAreaChart data={data as Statistics} />
      <NewUsersScatterChart data={data as Statistics} />
      <NewUsersPieChart data={data as Statistics} />
      <Footer />
    </>
  );
};
