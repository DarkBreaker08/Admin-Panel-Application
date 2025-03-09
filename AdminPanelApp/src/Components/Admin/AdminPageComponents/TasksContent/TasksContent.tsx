import { Tasks } from "../../../GeneralComponents/Tasks/Tasks";
import { Title } from "../../../GeneralComponents/Title";
import { Container } from "./Container/Container";
import { AddTaskWrap } from "./RecentAndAddTask/AddTask";
import { Footer } from "../../../GeneralComponents/Footer";
import { useGetTasksQuery } from "../../../../queries/useGetTasksQuery";
import { Task } from "../../../../types";
import { Navigate } from "react-router";

export const TasksContent = () => {
  const { data: tasks, isLoading } = useGetTasksQuery();
  if (!tasks && !isLoading) return <Navigate to="/error" />;

  return (
    <>
      <Title>Tasks</Title>
      <Container>
        <Tasks data={tasks as Task[]} />
        <AddTaskWrap />
      </Container>
      <Footer />
    </>
  );
};
