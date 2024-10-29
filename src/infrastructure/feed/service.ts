import { FeedApi } from "./interface";
import { dtoToFeed } from "./transform";


export class FeedService {
  constructor(private api: FeedApi) {
    this.api = api;
  }

  async getFeed() {
    const response = await this.api.getFeed();
    return dtoToFeed(response.data);
  }
}