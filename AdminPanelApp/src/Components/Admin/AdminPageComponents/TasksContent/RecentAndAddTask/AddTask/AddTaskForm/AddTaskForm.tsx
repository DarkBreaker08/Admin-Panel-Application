import { Button } from "@mui/material";
import styles from "./addtaskform.module.scss";
import { FormTitle } from "../FormTitle/FormTitle";
import { useForm } from "react-hook-form";
import { TextFieldInput } from "../../../../../../GeneralComponents/TextFieldInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTaskSchema } from "../../../../../../../utils";
import { TaskDto } from "../../../../../../../types";
import { useCreateTaskMutation } from "../../../../../../../queries/useCreateTaskMutation";

export const AddTaskForm = () => {
  const { mutate, isPending, isSuccess } = useCreateTaskMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  const onSubmit = (data: TaskDto) => {
    const numericTime: number =
      typeof data.time === "string"
        ? Number(data.time.split(":")[0])
        : data.time;
    data.time = numericTime;

    mutate(data);
  };

  return (
    <>
      <FormTitle />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextFieldInput
          label={
            errors.description ? errors.description.message : "Description"
          }
          variant="filled"
          type="text"
          id="Description"
          error={errors.description}
          {...register("description")}
        />
        <TextFieldInput
          label={errors.time ? errors.time.message : "Time"}
          variant="filled"
          type="text"
          id="Time"
          error={errors.time}
          {...register("time")}
        />

        <Button type="submit" variant="contained" disabled={isPending}>
          Add Task
        </Button>
        {isSuccess ? (
          <p className={styles.successTitle}>Task successfully added!</p>
        ) : null}
      </form>
    </>
  );
};
