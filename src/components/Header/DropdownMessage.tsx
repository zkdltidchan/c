import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';

import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';

interface MessageProps {
  avatar: string;
  name: string;
  text: string;
  time: number;
}

const chatData: MessageProps[] = [
  {
    avatar: UserOne,
    name: 'Devid Heilo',
    text: 'How are you?',
    time: 12,
  },
  {
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'Waiting for you!',
    time: 12,
  },
  {
    avatar: UserThree,
    name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
  }
];

const MessageCard = ({ avatar, name, text, time }: MessageProps) => {
  return (
    <Link
      className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
      to="/messages"
    >
      <div className="h-12.5 w-12.5 rounded-full">
        <img src={avatar} alt="User" />
      </div>

      <div>
        <h6 className="text-sm font-medium text-black dark:text-white">
          {name}
        </h6>
        <p className="text-sm">{text}</p>
        <p className="text-xs">{time} mins ago</p>
      </div>
    </Link>
  );
};


const DropdownMessage = () => {
  const messages = chatData;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li className="relative">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative flex h-7 w-7 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
          to="#"
        >
          <span
            className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? 'hidden' : 'inline'
              }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>

          <ChatBubbleBottomCenterIcon className="h-4 w-4" />
        </Link>

        {/* <!-- Dropdown Start --> */}
        {dropdownOpen && (
          <div
            className={`absolute -right-16 mt-2.5 flex max-h-60 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              {messages.map((message, key) => (
                <MessageCard
                  key={key}
                  avatar={message.avatar}
                  name={message.name}
                  text={message.text}
                  time={message.time}
                />
              ))}
            </ul>
          </div>
        )}
        {/* <!-- Dropdown End --> */}
      </li>
    </ClickOutside>
  );
};

export default DropdownMessage;
