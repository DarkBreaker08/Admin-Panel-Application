import styles from "./addtask.module.scss";
import { AddTask } from "./AddTask/AddTask";

export const AddTaskWrap = () => {
  return (
    <div className={styles.container}>
      <AddTask />
    </div>
  );
};
