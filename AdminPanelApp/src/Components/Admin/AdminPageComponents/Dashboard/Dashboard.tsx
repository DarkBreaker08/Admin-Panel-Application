import { Footer } from "../../../GeneralComponents/Footer";
import { RevenueChart } from "./RevenueChart/RevenueChart";
import { StatisticsComponent } from "./Statistics/Statistics";
import { TasksAndUpdates } from "./TasksAndUpdates/TasksAndUpdates";
import { Navigate, useParams } from "react-router";
import { Title } from "../../../GeneralComponents/Title";
import { useGetStatisticsQuery } from "../../../../queries/useGetStatisticsQuery";
import { Statistics, Task, User } from "../../../../types";
import { useGetTasksQuery } from "../../../../queries/useGetTasksQuery";
import { useGetNewUsersQuery } from "../../../../queries/useGetNewUsersQuery";

export const Dashboard = () => {
  const { adminEmail } = useParams();
  const { data, isLoading } = useGetStatisticsQuery();
  const { data: tasks } = useGetTasksQuery();
  const { data: users } = useGetNewUsersQuery();
  if ((!data && !isLoading) || (!tasks && !isLoading))
    return <Navigate to="/error" />;

  return (
    <>
      <Title>Welcome {adminEmail}</Title>
      <StatisticsComponent data={data as Statistics} />
      <RevenueChart data={data as Statistics} />
      <TasksAndUpdates tasks={tasks as Task[]} users={users as User[]} />
      <Footer />
    </>
  );
};
