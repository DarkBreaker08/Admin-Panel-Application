import { FieldError } from "react-hook-form";

type PanelAdminFormErrorProps = {
  error: FieldError | undefined;
};

export const PanelAdminFormError = ({ error }: PanelAdminFormErrorProps) => {
  if (!error) return null;

  return <p>{error.message}</p>;
};
