import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { BellIcon } from '@heroicons/react/24/solid';

interface NotificationProps {
  to: string;
  title: string;
  content: string;
  timestamp: string;
}

const NotificationCard = ({ to, title, content, timestamp }: NotificationProps) => {
  return (
    <Link
    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
    to={to}
  >
    <p className="text-sm">
      <span className="text-black dark:text-white">
        {title}
      </span>{' '}
      {content}
    </p>

    <p className="text-xs">{timestamp}</p>
  </Link>
  )
}

const notificationData = [{
  to: '#',
  title: 'Your order is placed',
  content: 'Dummy text of the printing and typesetting industry. ',
  timestamp: '2 mins ago',
}, {
  to: '#',
  title: 'New customer is registered',
  content: 'Dummy text of the printing and typesetting industry. ',
  timestamp: '2 mins ago',
},
{
  to: '#',
  title: 'Your order is placed',
  content: 'Dummy text of the printing and typesetting industry. ',
  timestamp: '2 mins ago',
},
]

const DropdownNotification = () => {
  const notifications = notificationData
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          to="#"
          className="relative flex h-7 w-7 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? 'hidden' : 'inline'
            }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
          <BellIcon className="h-4 w-4" />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-2.5 flex max-h-60 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">
                Notification
              </h5>
            </div>
            <ul className="flex h-auto flex-col overflow-y-auto">
              { notifications.map((notification, index) => (
                <NotificationCard key={index} {...notification} />
              ))
            }
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
