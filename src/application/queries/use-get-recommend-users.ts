import { useQuery } from "@tanstack/react-query";

import UserService from "@/infrastructure/user";


export function getQueryKey(handle?: string) {
  return ["recommend", handle];
}

export function useGetRecommendUsers() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => UserService.getRecommendedUsers(),
  });
}