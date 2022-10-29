import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>
            <h1>{chat.chatName}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chatpage;
