import { dtoToImage } from "../media/transform";
import { dtoToShout } from "../shout/transform";

import UserApi from "./api-mock";
import { dtoToMe, dtoToUser } from "./transform";

async function getMe(api = UserApi) {
  const { data: meDto } = await api.getMe();
  return dtoToMe(meDto);
}

async function getUser(handle?: string, api = UserApi) {
  if (!handle) {
    return null;
  }
  const { data: userDto } = await api.getUser(handle);
  return dtoToUser(userDto);
}

async function getUserShouts(handle?: string, api = UserApi) {
  if (!handle) {
    return null;
  }
  const { data: shoutDtos, included: imageDtos } = await api.getUserShouts(handle);
  const shouts = shoutDtos.map(dtoToShout);
  const images = imageDtos.map(dtoToImage);
  return { shouts, images };
}

async function getRecommendedUsers(api = UserApi) {
  const { data: userDtos } = await api.getRecommendedUsers();
  return userDtos.map(dtoToUser);
}
export default { getMe, getUser, getUserShouts, getRecommendedUsers };