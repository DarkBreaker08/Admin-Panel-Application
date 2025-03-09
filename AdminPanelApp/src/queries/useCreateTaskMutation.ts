import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Task, TaskDto } from "../types";

export const useCreateTaskMutation = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["tasks", "create"],
    mutationFn: async (payload: TaskDto) => {
      return apiPost<Task, TaskDto>(`tasks`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { mutate, isPending, isSuccess };
};
