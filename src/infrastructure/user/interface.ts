import { UserDto } from "./dto";

export interface UserApi {
    getUser(handle: string): Promise<{ data: UserDto }>;
    getRecommendedUsers(): Promise<{ data: UserDto[] }>;
}