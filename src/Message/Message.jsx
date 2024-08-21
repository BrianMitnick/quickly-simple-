import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Message.css"; // Replace with the actual CSS file name
import { IoSearchSharp } from "react-icons/io5";
import Loader from "../Loader/Loader";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ChatPopup from "../chat-popup/ChatPopup";

const Message = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [showChatPopup, setShowChatPopup] = useState(false); 

  const handleChatButtonClick = () => {
    setShowChatPopup(!showChatPopup); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        const limitedUsers = response.data.data.slice(0, 4); 
        const modifiedMessages = limitedUsers.map((message) => {
          const simulatedDate = new Date().toLocaleDateString();
          return {
            ...message,
            date: simulatedDate,
          };
        });

        setMessages(modifiedMessages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <IoSearchSharp />
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div className="chat-message" key={index}>
              <div className="border blue-border">
                <FaRegUser className="icons123" />
              </div>
              <div className="border gray-border">
                <FaRegUser className="icons123" />
              </div>
              <div className="user">
                <Link className="text" onClick={handleChatButtonClick}>
                  {message.first_name} {message.last_name}
                </Link>
                <Link className="text2">{message.email}</Link>
                <Link className="text3">{message.date}</Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {showChatPopup && <ChatPopup/>}
    </div>
  );
};

export default Message;