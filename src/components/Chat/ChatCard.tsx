import { NavLink } from 'react-router-dom';
import { Chat } from '@/types/chat';
import UserOne from '@/images/user/user-01.png';
import UserTwo from '@/images/user/user-02.png';
import UserThree from '@/images/user/user-03.png';
import UserFour from '@/images/user/user-04.png';
import UserFive from '@/images/user/user-05.png';

const chatData: Chat[] = [
  {
    id: "1",
    avatar: UserOne,
    name: 'Devid Heilo',
    text: 'How are you?',
    time: 12,
    textCount: 3,
    color: '#10B981',
  },
  {
    id: "2",
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'Waiting for you!',
    time: 12,
    textCount: 0,
    color: '#DC3545',
  },
  {
    id: "3",
    avatar: UserFour,
    name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
    textCount: 0,
    color: '#10B981',
  },
  {
    id: "4",
    avatar: UserFive,
    name: 'Jane Doe',
    text: 'Great',
    time: 32,
    textCount: 2,
    color: '#FFBA00',
  },
  {
    id: "5",
    avatar: UserOne,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 0,
    color: '#10B981',
  },
  {
    id: "6",
    avatar: UserThree,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    color: '#FFBA00',
  },
  {
    id: "7",
    avatar: UserOne,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 0,
    color: '#10B981',
  },

];

const ChatCard = () => {
  return (
    <div className="bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-md font-semibold text-black dark:text-white">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => {
          return (
            <NavLink
              to={"/messages/" + chat.id}
              className={"flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"}
              // className={(isSelected) =>
              //   "flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 " + (isSelected && '!bg-meta-4')
              //   // 'group relative flex items-center gap-2.5 text-sm rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
              //   // (isActive && '!text-white')
              // }
              key={key}
            >
              <div className="relative h-10 w-10 rounded-full">
                <img src={chat.avatar} alt="User" />
                <span
                  className="absolute right-0 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: chat.color }}
                ></span>
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {chat.name}
                  </h5>
                  <p>
                    <span className="text-xs text-black dark:text-white">
                      {chat.text}
                    </span>
                    <span className="text-xs"> . {chat.time} min</span>
                  </p>
                </div>
                {chat.textCount !== 0 && (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <span className="text-xs font-medium text-white">
                      {' '}
                      {chat.textCount}
                    </span>
                  </div>
                )}
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  );
};

export default ChatCard;
