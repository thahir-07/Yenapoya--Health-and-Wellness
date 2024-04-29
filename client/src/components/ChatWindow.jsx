import { ChatEngine } from 'react-chat-engine';
import '../assets/css/ChatWindow.css';

const ChatWindow = (props) => {
  const CHAT_ENGINE_PROJECT_ID = '0bc62ded-0733-4ebc-a61b-60347c21c87c';

  return (
    <div>
      <ChatEngine
        projectID={CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
        height='100vh'
        offset={6}
      />
    </div>
  );
};

export default ChatWindow;