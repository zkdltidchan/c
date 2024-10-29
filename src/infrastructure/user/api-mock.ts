import userOne from '@/images/user/user-01.png';
import userTwo from '@/images/user/user-02.png';
import userThree from '@/images/user/user-03.png';
import userFour from '@/images/user/user-04.png';
import userFive from '@/images/user/user-05.png';
import userSix from '@/images/user/user-06.png';
import coverOne from '@/images/cover/cover-01.png';
import coverTwo from '@/images/cover/cover-02.png';
import coverThree from '@/images/cover/cover-03.png';
import coverFour from '@/images/cover/cover-04.png';
import coverFive from '@/images/cover/cover-05.png';
import coverSix from '@/images/cover/cover-06.png';
import { MeDto, UserDto, UserShoutsResponse } from "./dto";

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

const avatarList = [userOne, userTwo, userThree, userFour, userFive, userSix];
const coverList = [coverOne, coverTwo, coverThree, coverFour, coverFive, coverSix];
//fakeUserList
function getFakeUserList(): UserDto[] {

    var items: UserDto[] = [];
    for (let i = 0; i < 10; i++) {
        const username = usernameList[i % usernameList.length];
        const avatar = avatarList[i % avatarList.length];
        const cover = coverList[i % coverList.length];
        var item: UserDto = {
            id: `User${i + 1}`,
            type: "user",
            attributes: {
                handle: username.toLowerCase(),
                avatar: avatar,
                cover: cover,
                name: username,
                bio: "hihihihi",
                location: "test",
                blockedUserIds: [],
                numShoutsPastDay: 0,
            },
            relationships: {
                followerIds: [],
                postIds: [],
                followingIds: [],
            },
        };
        items.push(item);
    }
    items.push(fakeMe);
    return items;
}
const emptyUser: UserDto = {
    id: "empty",
    type: "user",
    attributes: {
        handle: "",
        avatar: "",
        cover: "",
        name: "",
        bio: "",
        location: "",
        blockedUserIds: [],
        numShoutsPastDay: 0,
    },
    relationships: {
        followerIds: [],
        postIds: [],
        followingIds: [],
    },
};

const fakeMe: MeDto = {
    id: "KaiChan",
    type: "user",
    attributes: {
        email: "kai@kai",
        phone: "+82 10 1234 5678",
        handle: "KaiChan",
        avatar: "https://api.dicebear.com/9.x/dylan/svg?radius=50",
        cover: coverOne,
        name: "Kai Chan",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.",
        location: "test",
        blockedUserIds: [],
        numShoutsPastDay: 0,
    },
    relationships: {
        followerIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        postIds: ["1", "2", "3", "4", "5", "6"],
        followingIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12","13","14","15","16","17","18","19","20"],
    },
};
//record
function getFakeUserByHandle(handle: string):{ data: UserDto } {
    const handleLower = handle.toLowerCase();
    const fakeDataList = getFakeUserList();
    const fakeData = fakeDataList.find((item) => item.attributes.handle.toLowerCase() === handleLower);
    if (!fakeData) {
        return { data: emptyUser };
    }
    return { data: fakeData };
}



async function getMe(): Promise<{ data: MeDto }> {
    const fakeData: { data: MeDto } = { data: fakeMe };
    return fakeData;
}

async function getUser(handle: string): Promise<{ data: UserDto }> {
    const fakeData: { data: UserDto } = getFakeUserByHandle(handle);
    return fakeData;
}

async function getRecommendedUsers(): Promise<{ data: UserDto[] }> {
    const fakeData: { data: UserDto[] } = {
        data: getFakeUserList(),
    }
    return fakeData;
}

async function getUserShouts(handle: string) {
    const fakeData: UserShoutsResponse = {
        data: [],
        included: [],
    }

    return fakeData;
}

export default { getMe, getUser, getUserShouts, getRecommendedUsers };