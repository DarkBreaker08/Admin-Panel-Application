import { Task, User } from "../../../../../types";
import { Tasks } from "../../../../GeneralComponents/Tasks/Tasks";
import { Updates } from "./Updates/Updates";
import styles from "./tasksAndUpdates.module.scss";

type TasksAndUpdatesProps = {
  tasks: Task[];
  users: User[];
};

export const TasksAndUpdates = ({ tasks, users }: TasksAndUpdatesProps) => {
  if (!tasks || !users) return;

  return (
    <section className={styles.container}>
      <Tasks data={tasks} />
      <Updates users={users} />
    </section>
  );
};
