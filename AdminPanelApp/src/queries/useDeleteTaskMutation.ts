import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Task } from "../types";

export const useDeleteTaskMutation = (taskId: string) => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["tasks", "delete"],
    mutationFn: async () => {
      return apiDelete<Task>(`tasks/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { mutate, isPending, isSuccess };
};
