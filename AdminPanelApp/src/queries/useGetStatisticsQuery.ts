import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Statistics } from "../types/index";

export const useGetStatisticsQuery = () => {
  const { apiGet } = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      return apiGet<Statistics>(`statistics`);
    },
    staleTime: 30000,
  });

  return { data, isLoading };
};
