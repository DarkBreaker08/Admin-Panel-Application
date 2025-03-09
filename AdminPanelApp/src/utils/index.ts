import { object, string } from "yup";

export const adminLoginSchema = object({
  Email: string()
    .required("E-mail is required in order to log in properly!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter the proper e-mail structure!"
    ),
  Password: string()
    .required("Password is required in order to log in properly!")
    .min(8, "Password must be at least 8 characters!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])/,
      "Password must contain at least one upper and lowercase letter and special character!"
    ),
});

export const addTaskSchema = object({
  description: string()
    .required("Task description is required!")
    .min(6, "Task description must be at least 6 letters!"),
  time: string()
    .required("Time is required!")
    .matches(
      /^(?:[01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Time must be a clock hour!"
    ),
});
