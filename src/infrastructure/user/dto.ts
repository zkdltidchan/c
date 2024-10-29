import { ImageDto } from "../media/dto";
import { ShoutDto } from "../shout/dto";

export interface UserDto {
  id: string;
  type: "user";
  attributes: {
    handle: string;
    avatar: string;
    cover: string;
    name: string;
    bio?: string;
    location?: string;
    numShoutsPastDay: number;
    blockedUserIds: string[];
  };
  relationships: {
    followerIds: string[];
    postIds: string[];
    followingIds: string[];
  };
}

export interface MeDto extends UserDto {
  attributes: {
    email: string;
    phone: string;
    handle: string;
    avatar: string;
    cover: string;
    name: string;
    bio?: string;
    location?: string;
    numShoutsPastDay: number;
    blockedUserIds: string[];
  };
}

export interface UserShoutsResponse {
  data: ShoutDto[];
  included: ImageDto[];
}