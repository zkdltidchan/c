import { Shout } from "@/domain/shout/shout";
import { Image } from "@/domain/media/media";
import { User } from "@/domain/user/user";

export interface Feed {
  users: User[];
  images: Image[];
  shouts: Shout[];
}

export function getShoutById(shouts?: Shout[], shoutId?: string) {
  if (!shoutId || !shouts) return;
  return shouts.find((s) => s.id === shoutId);
}

export function getImageById(images?: Image[], imageId?: string) {
  if (!imageId || !images) return;
  return images.find((i) => i.id === imageId);
}

export function getUserById(users?: User[], userId?: string) {
  if (!userId || !users) return;
  return users.find((u) => u.id === userId);
}