import styles from "./addtask.module.scss";
import { AddTaskForm } from "./AddTaskForm/AddTaskForm";

export const AddTask = () => {
  return (
    <>
      <section className={styles.container}>
        <AddTaskForm />
      </section>
    </>
  );
};
