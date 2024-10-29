import { ShoutDto, CreateShoutInput, CreateShoutReplyInput } from "./dto";

export interface ShoutApi {
    createShout(input: CreateShoutInput): Promise<{ data: ShoutDto }>;
    createReply(input: CreateShoutReplyInput): Promise<{ data: ShoutDto }>;
}