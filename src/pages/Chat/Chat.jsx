import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'John', message: 'Hello there!' },
    { sender: 'Alice', message: 'Hi John! How are you?' },
    { sender: 'John', message: "I'm doing great. How about you?" },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [newSender, setNewSender] = useState('');

  const handleSendMessage = () => {
    if (newMessage && newSender) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: newSender, message: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="sender">{msg.sender}</div>
            <div className="text">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Sender"
          value={newSender}
          onChange={(e) => setNewSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
