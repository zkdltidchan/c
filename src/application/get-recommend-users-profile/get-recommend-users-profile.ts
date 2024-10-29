import { useGetRecommendUsers } from "@/application/queries/use-get-recommend-users";

export function useGetRecommendUsersProfile() {
  const users = useGetRecommendUsers();
  return {
    users: users.data,
    isLoading: users.isLoading,
    error: users.error
  };
}