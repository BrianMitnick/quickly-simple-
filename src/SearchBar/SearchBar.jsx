import React, { useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import Task from "../assets/icons2 (4).png";
import messages from "../assets/icons2 (3).png";
import petir from "../assets/icons2 (2).png";

function SearchBar() {
  const [showTaskInbox, setShowTaskInbox] = useState(false);

  const handleButtonClick = () => {
    setShowTaskInbox(!showTaskInbox);
  };

  const [showMsg, setShowMsg] = useState(false);

  const handleClick = () => {
    setShowMsg(!showMsg);
  };

  return (
    <>
      <div className="search-bar">
        <CiSearch className="search-icon" />
        <input type="text" />
      </div>
      <Link onClick={handleButtonClick}>
        <img src={petir} alt="" width={41} height={41} className="icon" />
      </Link>
      {showTaskInbox && (
        <div className="task-inbox-container">
          <div className="task-inbox-item">
            <p className="task-inbox-text">Task</p>
            <Link>
              <img src={Task} alt="" width={41} height={41} />
            </Link>
          </div>
          <div className="task-inbox-item">
            <p className="task-inbox-text">Inbox</p>
            <Link onClick={handleClick}>
              <img src={messages} alt="" width={41} height={41} className="icon2" />
            </Link>
            {showMsg && <Message />}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;