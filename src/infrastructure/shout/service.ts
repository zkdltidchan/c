import { ShoutApi } from "./interface";
import { CreateShoutInput, CreateShoutReplyInput } from "./dto";
import { dtoToShout } from "./transform";


export class ShoutService {
  constructor(private api: ShoutApi) {
    this.api = api;
  }

  async createShout(input: CreateShoutInput) {
    const response = await this.api.createShout(input);
    return dtoToShout(response.data);
  }

  async createReply(input: CreateShoutReplyInput) {
    const response = await this.api.createReply(input);
    return dtoToShout(response.data);
  }
}