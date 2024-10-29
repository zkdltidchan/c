import { ImageDto } from "@/infrastructure/media/dto";
import { ShoutDto } from "@/infrastructure/shout/dto";
import { UserDto } from "@/infrastructure/user/dto";

export interface FeedDto {
  data: ShoutDto[];
  included: (UserDto | ImageDto)[];
}