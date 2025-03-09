import { Typography } from "@mui/material";
import styles from "./general.module.scss";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <Typography className={styles.title}>{children}</Typography>;
};
