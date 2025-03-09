import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextFieldInputProps = {
  label: string | undefined;
  type: "text" | "number" | "password";
  error?: FieldError;
  id: string;
  variant?: "filled";
};

export const TextFieldInput = forwardRef<
  HTMLInputElement,
  TextFieldInputProps & UseFormRegisterReturn
>(({ label, id, type, error, variant, ...register }, ref) => {
  return (
    <TextField
      error={!!error}
      fullWidth
      variant={!!variant ? variant : "outlined"}
      label={label}
      id={id}
      type={type}
      ref={ref}
      {...register}
    />
  );
});
