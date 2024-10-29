import { apiClient } from "@/infrastructure/client";

import { FeedDto } from "./dto";

async function getFeed() {
  const response = await apiClient.get<{ data: FeedDto }>("/feed");
  return response.data;
}

export default { getFeed };