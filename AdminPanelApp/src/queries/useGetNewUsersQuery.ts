import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { User } from "../types";

export const useGetNewUsersQuery = (specificUserId?: string) => {
  const { apiGet } = useApi();

  const { data } = useQuery({
    queryKey: ["newUsers"],
    queryFn: async () => {
      if (!specificUserId) return apiGet<User[]>("newUsers");
      return apiGet<User>(`newUsers/${specificUserId}`);
    },
    staleTime: 30000,
  });

  return { data };
};
