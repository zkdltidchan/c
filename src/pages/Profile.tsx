import { useGetRecommendUsersProfile } from '@/application/get-recommend-users-profile';
import { useGetUserProfile } from '@/application/get-user-profile';
import { LoadingSpinner } from '@/components/Loading/loading-spinner';
import { RecommendUserList } from '@/components/RecommendUser/RecommendUserList';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ShoutList } from "@/components/Shouts/ShoutList";
import { useGetFeed } from '@/application/queries/use-get-feed';

const Profile = () => {
  const { handle } = useParams<{ handle: string }>();
  const profile = useGetUserProfile({ handle });
  const recommenUsers = useGetRecommendUsersProfile();
  const feed = useGetFeed();

  if (!handle) {
    return <Navigate to="/" />;
  }

  if (profile.isLoading) {
    return <LoadingSpinner />;
  }
  if (profile.error || !profile.user || !profile.shouts || !profile.images) {
    return <div>An error occurred</div>;
  }

  if (!recommenUsers.users) {
    return <div>An error occurred</div>;
  }

  if (recommenUsers.isLoading) {
    return <LoadingSpinner />;
  }

  if (recommenUsers.error) {
    return <div>An error occurred</div>;
  }

  if (!recommenUsers.users) {
    return <div>An error occurred</div>;
  }

  if (!feed.data) {
    return <div>An error occurred</div>;
  }

  return (
    <>
      {/* <Breadcrumb pageName="Profile" /> */}
      <div className="flex gap-6 p-5" >
        {/* left side - user profile */}
        <div className="w-full overflow-hidden border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
          <div className="relative z-20 h-35 md:h-65">
            <img
              src={profile.user.cover}
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
                <img src={profile.user.avatar} alt="profile" />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:-bottom-2 sm:-right-1"
                >
                  <input type="file" name="profile" id="profile" className="sr-only" />
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-md font-semibold text-black dark:text-white">{profile.user.name}</h3>
              <p className="text-xs font-medium">{profile.user.id}</p>
              <div className="grid max-w-70 grid-cols-3 py-2.5">
                <div className="flex flex-col items-center justify-left gap-1 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{profile.user.postIds.length}</span>
                  <span className="text-xs">Posts</span>
                </div>
                <div className="flex flex-col items-center justify-left gap-1 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{profile.user.followerIds.length}</span>
                  <span className="text-xs">Followers</span>
                </div>
                <div className="flex flex-col items-center justify-left gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">{profile.user.followingIds.length}</span>
                  <span className="text-xs">Following</span>
                </div>
              </div>

              <div className="mx-auto max-w-180">
                {/* <h4 className="font-semibold text-black dark:text-white">Bio</h4> */}
                <p className="mt-4.5 text-xs">{profile.user.bio}</p>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden shadow-default">
                <ShoutList
                    shouts={feed.data.shouts}
                    users={feed.data.users}
                    images={feed.data.images}
                />
            </div>
        </div>

        {/* right side - extra content */}
          
          <div className="hidden md:block space-y-4 w-1/2 rounded-sm shadow-default flex flex-col">
          {/* section - you may also like - start */}
                    <RecommendUserList users={recommenUsers.users} max={3} />
                    <RecommendUserList users={recommenUsers.users} max={3} />
                    <RecommendUserList users={recommenUsers.users} max={3} />
            </div>
          {/* section - you may also like - end */}
        </div>
    </>
  );
};

export default Profile;
