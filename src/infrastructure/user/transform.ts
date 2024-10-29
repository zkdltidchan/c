import { Me } from "@/domain/me";
import { User } from "@/domain/user";

import { MeDto, UserDto } from "./dto";

export function dtoToUser(dto: UserDto): User {
  return {
    id: dto.id,
    name: dto.attributes.name,
    avatar: dto.attributes.avatar,
    cover: dto.attributes.cover,
    handle: dto.attributes.handle,
    bio: dto.attributes.bio,
    blockedUserIds: dto.attributes.blockedUserIds,
    followerIds: dto.relationships.followerIds,
    followingIds: dto.relationships.followingIds,
    postIds: dto.relationships.postIds,

  };
}

export function dtoToMe(dto?: MeDto): Me | null {
  if (!dto) {
    return null;
  }

  return {
    ...dtoToUser(dto),
    phone: dto.attributes.phone,
    email: dto.attributes.email,
    numShoutsPastDay: dto.attributes.numShoutsPastDay,
  };
}