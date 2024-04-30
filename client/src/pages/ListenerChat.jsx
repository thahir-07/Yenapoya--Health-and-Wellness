import { useState } from "react";
import ChatAuth from "../components/ChatAuth";
import ChatWindow from "../components/ChatWindow";

const ListenerChat = () => {
  const [user, setUser] = useState({username:"thahir", secret: "123456"});
    return <ChatWindow user={user} />
  
};

export default ListenerChat;