
import userOne from '@/images/user/user-01.png';
import userTwo from '@/images/user/user-02.png';
import userThree from '@/images/user/user-03.png';
import userFour from '@/images/user/user-04.png';
import userFive from '@/images/user/user-05.png';
import userSix from '@/images/user/user-06.png';
import { FeedDto } from "./dto";

import { ImageDto } from "@/infrastructure/media/dto";
import { ShoutDto } from "@/infrastructure/shout/dto";
import { UserDto } from "@/infrastructure/user/dto";
const avatarList: string[] = [userOne, userTwo, userThree, userFour, userFive, userSix];
const textList: string[] = [
  "Exploring the vast universe of possibilities.",
  "Innovation is the key to the future.",
  "Each day brings new opportunities to learn.",
  "The beauty of nature inspires creativity.",
  "Building connections fosters growth.",
  "A journey of a thousand miles begins with a single step.",
  "Resilience is the cornerstone of success.",
  "Embracing change opens new doors.",
  "Every challenge is an opportunity in disguise.",
  "Small actions can lead to big transformations.",
  "Curiosity fuels discovery and knowledge.",
  "Working together strengthens our collective vision."
];

const usernameList: string[] = [
  "Brave", "Curious", "Swift", "Silent", "Mighty", "Witty", 
  "Bold", "Loyal", "Gentle", "Noble", "Lucky", "Wise"
];

const generateLocalCreatedAt = () => {
  const timestamp = Date.now() - Math.floor(Math.random() * 1000000000);
  const date = new Date(timestamp);
  
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

console.log(generateLocalCreatedAt()); // 例如： "10/28/2024, 03:45:12 PM"


function getFakeShouts(): ShoutDto[] {
  var items: ShoutDto[] = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i.toString(),
      type: "shout",
      // random date
      createdAt: generateLocalCreatedAt(),
      attributes: {
        authorId: i.toString(),
        text: textList[i % textList.length],
        likes: i,
        reshouts: i,
      },
      relationships: {
        replies: ["ffff"],
      },
    });
  }
  return items;
}

const getFakeImages = (): ImageDto[] => {
  var items: ImageDto[] = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i.toString(),
      type: "image",
      attributes: {
        url: "test",
      },
    });
  }
  return items;
};

const getFakeUsers = (): UserDto[] => {
  var items: UserDto[] = [];
  for (let i = 0; i < 10; i++) {
    const username = usernameList[i % usernameList.length];
    items.push({
      id: i.toString(),
      type: "user",
      attributes: {
        handle: username.toLowerCase(),
        avatar: (avatarList[i % avatarList.length]),
        cover: "test",
        name: username,
        bio: "test",
        location: "test",
        numShoutsPastDay: 0,
        blockedUserIds: [],
      },
      relationships: {
        followerIds: [],
        postIds: [],
        followingIds: [],
      },
    });
  }
  return items;
};



const fakeData: FeedDto = {
  data: getFakeShouts(),
  included: getFakeUsers(),
};

async function getFeed(): Promise<{ data: FeedDto }> {
  return { data: fakeData };
}

export default { getFeed };