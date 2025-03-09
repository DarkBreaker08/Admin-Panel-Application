import { Task as TaskType } from "../../../types";
import { Task } from "./Task";
import styles from "./tasks.module.scss";

type TasksProps = {
  widthValue?: string | number;
  data: TaskType[];
};

export const Tasks = ({ widthValue, data }: TasksProps) => {
  return (
    <>
      <div
        className={styles.container}
        style={{ width: widthValue || undefined }}
      >
        <div className={styles.tasks_title}>
          <h2>Tasks</h2>
        </div>
        <ul className={styles.tasks_list}>
          {data.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              time={task.time}
              description={task.description}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
