import CoverOne from '../images/cover/cover-01.png';
import userThree from '../images/user/user-03.png';
import { PencilSquareIcon, CameraIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Settings = () => {
  const { name, coverUrl, profileUrl, job, description, posts, followers, following } = {
    name: 'Cristina Groves',
    coverUrl: CoverOne,
    profileUrl: userThree,
    job: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie lorem eu, pretium arcu.',
    posts: 120,
    followers: 120,
    following: 120
  };
  return (
    <>
      <div className="mx-auto max-w-270 p-4 md:p-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3 gap-6 flex flex-col">
            {/* <!-- Profile Cover Start --> */}
            <div className="rounded-2xl bg-white shadow-default dark:bg-boxdark">
              <div className="w-full rounded-2xl overflow-hidden bg-white shadow-default dark:bg-boxdark ">
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
                        className="absolute bottom-0 right-0 flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-2xl bg-primary text-white hover:bg-opacity-90 sm:-bottom-2 sm:-right-1"
                      >
                        <CameraIcon className="h-3.5 w-3.5" />
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
            </div>
            {/* <!-- Profile Cover End --> */}

            {/* <!-- Profile Edit Start --> */}
            <div className=" rounded-2xl  bg-white shadow-default dark:bg-boxdark">
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="userID"
                      >
                        User ID
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded-2xl border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="userID"
                          id="userID"
                          placeholder="@KaiChan"
                          defaultValue="@KaiChan"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded-2xl border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                        defaultValue="+990 3343 7865"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <EnvelopeIcon className="h-4.5 w-4.5" />
                      </span>
                      <input
                        className="w-full rounded-2xl border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="devidjond45@gmail.com"
                        defaultValue="devidjond45@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded-2xl border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="devidjhon24"
                      defaultValue="devidjhon24"
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <PencilSquareIcon className="h-4.5 w-4.5"/>
                      </span>
                      <textarea
                        className="w-full rounded-2xl border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="bio"
                        id="bio"
                        rows={6}
                        placeholder="Write your bio here"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Profile Edit End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;