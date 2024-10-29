import { FeedDto } from "@/infrastructure/feed/dto";
import { ImageDto } from "@/infrastructure/media/dto";
import { UserDto } from "@/infrastructure/user/dto";
import { dtoToShout } from "@/infrastructure/shout/transform";
import { dtoToUser } from "@/infrastructure/user/transform";
import { dtoToImage } from "@/infrastructure/media/transform";
import { Feed } from "@/domain/feed";
export function dtoToFeed(dto: FeedDto): Feed {
  const shouts = dto.data.map(dtoToShout);
  const users = dto.included.filter((u): u is UserDto => u.type === "user").map(dtoToUser);
  const images = dto.included.filter((i): i is ImageDto => i.type === "image").map(dtoToImage);
return { 
  shouts, images, users
 };
}