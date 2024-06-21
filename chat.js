import React, { useState } from 'react';
import './chat.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages([...messages, { text: input, sender: 'User' }]);
    setInput('');
  };

  return (
    <div>
      <h1 className='head'>Chat Application</h1>
      <div className='d1'>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
            <p className='para'>{msg.text}</p>
          </div>
        ))}
      </div>
      <input className='beautiful-input'
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className='btn' onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;