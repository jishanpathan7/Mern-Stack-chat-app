import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ChatState } from "../component/context/chatProvider";
import ChatBox from "../component/miscellaneous/ChatBox";
import MyChats from "../component/miscellaneous/MyChats";
import SideDrawer from "../component/miscellaneous/SideDrawer";

const Chatpage = () => {
  const { user } = ChatState();
 // console.log(user);
  return (
    <>
     <div style={{width:"100%"}}>
      <SideDrawer />
      <Box style={{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:"91.5vh",
        padding:"10px"

      }}>
        <MyChats />
        <ChatBox />
      </Box>
     </div> 
    </>
  );
};

export default Chatpage;
