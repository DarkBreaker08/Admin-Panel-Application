import { useQuery } from "@tanstack/react-query";
import { Task } from "../types";
import { useApi } from "../hooks/useApi";

export const useGetTasksQuery = (specificTaskId?: string) => {
  const { apiGet } = useApi();
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      if (!specificTaskId) return apiGet<Task[]>("tasks");
      return apiGet<Task>(`tasks/${specificTaskId}`);
    },
    staleTime: 30000,
  });

  return { data, isLoading };
};
