import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link, useParams } from 'react-router-dom';

interface UserProfileProps {
  name: string;
  coverUrl: string;
  profileUrl: string;
  job?: string;
  description?: string;
  location?: string;
  posts?: number;
  followers?: number;
  following?: number;
}

const userData: UserProfileProps = {
  name: 'John Doe',
  coverUrl: CoverOne,
  profileUrl: userSix,
  job: 'UI/UX Designer',
  description: "With four years of experience in automation testing in Taiwan, I moved to Korea in February 2022 to pursue my master's in computer engineering. My passion for distributed systems led me to write an SCI-level journal on Web3 Chord DHT resource clustering before graduating in August 2024. My research has given me a deep understanding of distributed architectures, consensus protocols like Paxos and Raft, and sparked my interest in blockchain technologies, particularly Bitcoin.",
  location: 'New York, USA',
  posts: 120,
  followers: 120,
  following: 120
};

interface RecommenUserProps {
  id: string;
  name: string;
  profileUrl: string;
  job: string;
}

const recommenUsersData: RecommenUserProps[] = [
  {
    id: '1',
    name: 'Devid Heilo',
    profileUrl: userSix,
    job: 'UI/UX Designer'
  },
  {
    id: '2',
    name: 'Henry Fisher',
    profileUrl: userSix,
    job: 'UI/UX Designer'
  },
  {
    id: '3',
    name: 'Jhon Doe',
    profileUrl: userSix,
    job: 'UI/UX Designer'
  },
  {
    id: '4',
    name: 'Jhon Doe',
    profileUrl: userSix,
    job: 'UI/UX Designer'
  }
];

const userDataMap: Record<string, UserProfileProps> = {
  "1": {
    name: 'Devid Heilo',
    coverUrl: CoverOne,
    profileUrl: userSix,
    job: 'UI/UX Designer',
    posts: 120,
    followers: 120,
    following: 120
  },
  "2": {
    name: 'Henry Fisher',
    coverUrl: CoverOne,
    profileUrl: userSix,
    job: 'UI/UX Designer',
    posts: 120,
    followers: 120,
    following: 120
  },
  "3": {
    name: 'Jhon Doe',
    coverUrl: CoverOne,
    profileUrl: userSix,
    job: 'UI/UX Designer',
    posts: 120,
    followers: 120,
    following: 120
  },
  "4": {
    name: 'Jhon Doe',
    coverUrl: CoverOne,
    profileUrl: userSix,
    job: 'UI/UX Designer',
    posts: 120,
    followers: 120,
    following: 120
  }
}

const Profile = () => {
  const { id } = useParams();
  const { name, coverUrl, profileUrl, job, description, posts, followers, following } = userDataMap[id!];
  const recommenUsers = recommenUsersData;

  return (
    <>
      {/* <Breadcrumb pageName="Profile" /> */}
      <div className="flex gap-6 p-5" >
        {/* left side - user profile */}
        <div className="w-full overflow-hidden border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
          <div className="relative z-20 h-35 md:h-65">
            <img
              src={coverUrl}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            />
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4 ">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-xs font-medium text-white hover:bg-opacity-90 xsm:px-4"
              >
                <input type="file" name="cover" id="cover" className="sr-only" />
                <span>Edit</span>
              </label>
            </div>
          </div>

          <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5 ">
            <div className="relative z-30 ml-1 -mt-12 h-22 w-full max-w-22 rounded-full bg-white/20 p-1 backdrop-blur sm:h-38 sm:max-w-38 sm:p-2">
              <div className="relative drop-shadow-2">
                <img src={profileUrl} alt="profile" />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:-bottom-2 sm:-right-1"
                >
                  <input type="file" name="profile" id="profile" className="sr-only" />
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-md font-semibold text-black dark:text-white">{name}</h3>
              <p className="text-xs font-medium">{job}</p>
              <div className="grid max-w-70 grid-cols-3 py-2.5">
                <div className="flex flex-col items-center justify-left gap-1 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{posts}</span>
                  <span className="text-xs">Posts</span>
                </div>
                <div className="flex flex-col items-center justify-left gap-1 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{followers}</span>
                  <span className="text-xs">Followers</span>
                </div>
                <div className="flex flex-col items-center justify-left gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{following}</span>
                  <span className="text-xs">Following</span>
                </div>
              </div>

              <div className="mx-auto max-w-180">
                {/* <h4 className="font-semibold text-black dark:text-white">Bio</h4> */}
                <p className="mt-4.5 text-xs">{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side - extra content */}
        <div className="hidden md:block w-1/2 rounded-sm shadow-default dark:border-strokedark flex flex-col md:gap-3.5">
          {/* section - you may also like - start */}
          <div className="border-b border-stroke p-6 dark:border-strokedark rounded-md dark:bg-boxdark bg-white">
            <h4 className="mb-3 text-sm font-semibold text-black dark:text-white">You may also like</h4>
            <div className="flex flex-col gap-2.5">
              {recommenUsers.slice(0, 3).map((recommenUser, key) => (
                <div key={key}>
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 rounded-full">
                      <img src={recommenUser.profileUrl} alt="profile" />
                    </div>
                    <div>
                      <Link to={`/profile/${recommenUser.id}`} className="text-xs font-medium text-black dark:text-white">{recommenUser.name}</Link>
                      <p className="text-xs">{recommenUser.job}</p>
                    </div>
                    <button className="text-xs hover:text-primary dark:text-white bg-gray-2 hover:bg-blue-500 dark:hover:bg-meta-5 py-1 px-2.5 rounded dark:bg-meta-4">Follow</button>
                  </div>
                </div>
              ))}

              {recommenUsers.length > 3 && (
                <div className="text-left">
                  <button className="text-xs font-medium text-primary hover:underline">Show More</button>
                </div>
              )}

            </div>
          </div>
          {/* section - you may also like - end */}

          {/* section - you may also like - start */}
          <div className="border-b border-stroke p-6 dark:border-strokedark rounded-md dark:bg-boxdark bg-white">
            <h4 className="mb-3 text-sm font-semibold text-black dark:text-white">You may also like</h4>
            <div className="flex flex-col gap-2.5">
              {recommenUsers.slice(0, 3).map((recommenUser, key) => (
                <div key={key}>
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 rounded-full">
                      <img src={recommenUser.profileUrl} alt="profile" />
                    </div>
                    <div>
                      <Link to="#" className="text-xs font-medium text-black dark:text-white">{recommenUser.name}</Link>
                      <p className="text-xs">{recommenUser.job}</p>
                    </div>
                    <button className="text-xs hover:text-primary dark:text-white bg-gray-2 hover:bg-blue-500 dark:hover:bg-meta-5 py-1 px-2.5 rounded dark:bg-meta-4">Follow</button>
                  </div>
                </div>
              ))}

              {recommenUsers.length > 3 && (
                <div className="text-left">
                  <button className="text-xs font-medium text-primary hover:underline">Show More</button>
                </div>
              )}

            </div>
          </div>
          {/* section - you may also like - end */}
        </div>
      </div>
    </>
  );
};

export default Profile;
