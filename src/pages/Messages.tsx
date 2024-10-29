import ChatCard from '@/components/Chat/ChatCard';
import { useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hello! How are you?' },
    { id: 2, sender: 'other', text: 'I am fine, thank you! How about you?' },
    { id: 3, sender: 'user', text: 'I am doing great, thanks for asking!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        sender: 'user',
        text: newMessage,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <>
      <div className="flex h-full">
        {/* left side - user message cards */}
        <div className="w-2/5 overflow-y-auto h-full bg-white dark:bg-boxdark">
          <ChatCard />
        </div>
        {/* right side - chat message box */}
        <div className="flex flex-col w-full h-full shadow-default">
          {/* section - message chatbox - start */}
          <div className="flex-1 p-6 dark:bg-boxdark bg-white overflow-y-auto">
            <div className="flex flex-col justify-end">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  No messages yet. Start the conversation!
                </div>
              )}
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block rounded-lg p-3 ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* section - message chatbox - end */}

          {/* section - input box - start */}
          <div className="p-4 dark:bg-boxdark bg-white flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2  rounded-full border border-stroke dark:border-strokedark dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message here..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90"
            >
              Send
            </button>
          </div>
          {/* section - input box - end */}
        </div>
      </div>
    </>
  );
};

export default Messages;
