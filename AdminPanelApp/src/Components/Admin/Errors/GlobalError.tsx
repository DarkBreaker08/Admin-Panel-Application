import { Title } from "../../GeneralComponents/Title";
import styles from "./error.module.scss";

type GlobalErrorProps = {
  error?: string;
};

export const GlobalError = ({ error }: GlobalErrorProps) => {
  if (!error)
    return (
      <div className={styles.errorWrapper}>
        <Title>Something went wrong...</Title>
      </div>
    );

  return (
    <div className={styles.errorWrapper}>
      <Title>Something went wrong... {error}</Title>
      <h2 style={{ textAlign: "center" }}>Error: {error}</h2>
    </div>
  );
};
