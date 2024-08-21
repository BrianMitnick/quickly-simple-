import React, { useState } from 'react';
import { IoClose} from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import './ChatPopup.css';

const ChatPopup = () => {
 

  return (
    <div className="container3">
      <div className="header">
        <IoIosArrowBack className="back-button" />
        <span className="case-number">
          1-589-AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
        </span>
        <IoClose className="close-button" />
      </div>
      <div className="message-container">
      
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type a message" />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPopup;