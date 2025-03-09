import { Navigate } from "react-router";
import { useGetStatisticsQuery } from "../../../../queries/useGetStatisticsQuery";
import { Footer } from "../../../GeneralComponents/Footer";
import { Title } from "../../../GeneralComponents/Title";
import { NewDownloadsAreaChart } from "./NewDownloadsAreaChart/NewDownloadsAreaChart";
import { NewDownloadsLineChart } from "./NewDownloadsLineChart/NewDownloadsLineChart";
import { NewDownloadsPieChart } from "./NewDownloadsPieChart/NewDownloadsPieChart";
import { NewDownloadsScatterChart } from "./NewDownloadsScatterChart/NewDownloadsScatterChart";
import { Statistics } from "../../../../types";

export const NewDownloads = () => {
  const currentYear = new Date().getFullYear();
  const { data, isLoading } = useGetStatisticsQuery();
  if (!data && !isLoading) return <Navigate to="/error" />;

  return (
    <>
      <Title>New Downloads - Feburary {currentYear}</Title>
      <NewDownloadsLineChart data={data as Statistics} />
      <NewDownloadsAreaChart data={data as Statistics} />
      <NewDownloadsScatterChart data={data as Statistics} />
      <NewDownloadsPieChart data={data as Statistics} />

      <Footer />
    </>
  );
};
