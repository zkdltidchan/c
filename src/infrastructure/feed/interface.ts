import { FeedDto } from "./dto";

export interface FeedApi {
    getFeed(): Promise<{ data: FeedDto }>;
}