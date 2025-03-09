import { Button } from "@mui/material";
import styles from "./task.module.scss";
import { useDeleteTaskMutation } from "../../../queries/useDeleteTaskMutation";

type TaskProps = {
  time: number;
  description: string;
  id: string;
};

export const Task = ({ time, description, id }: TaskProps) => {
  const { mutate: del } = useDeleteTaskMutation(id);
  const handleDelete = () => {
    del();
  };

  return (
    <li className={styles.task}>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.time}>
        {time}
        {typeof time === "number" ? ":00" : null} {time >= 12 ? "PM" : "AM"}
      </h3>
      <Button variant="outlined" onClick={handleDelete}>
        DELETE
      </Button>
    </li>
  );
};
