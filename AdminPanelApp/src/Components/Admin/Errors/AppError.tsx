import { Title } from "../../GeneralComponents/Title";
import styles from "./error.module.scss";

type AppErrorProps = {
  error?: string;
};

export const AppError = ({ error }: AppErrorProps) => {
  if (!error)
    return (
      <div className={styles.errorWrapper}>
        <Title>Something went wrong with app...</Title>
      </div>
    );

  return (
    <div className={styles.errorWrapper}>
      <Title>Something went wrong with app... {error}</Title>
      <h2 style={{ textAlign: "center" }}>Error: {error}</h2>
    </div>
  );
};
