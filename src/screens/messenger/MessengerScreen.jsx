import "./messenger.css";
// import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import { io } from "socket.io-client";
import "../../components/conversations/menu.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "../../components/conversations/menu.css";
import { IconContext } from "react-icons";
import "../../components/conversations/conversation.css";

export default function MessengerScreen() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const socket = useRef();
  //   const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    // sidebarr(!sidebar)
  };

  // const sidebar = (value) => {
  //   setSidebarToggle(value);
  // };

  //   useEffect(() => {
  //     socket.current = io("ws://localhost:8900");
  //     socket.current.on("getMessage", (data) => {
  //       setArrivalMessage({
  //         sender: data.senderId,
  //         text: data.text,
  //         createdAt: Date.now(),
  //       });
  //     });
  //   }, []);

  //   useEffect(() => {
  //     arrivalMessage &&
  //       currentChat?.members.includes(arrivalMessage.sender) &&
  //       setMessages((prev) => [...prev, arrivalMessage]);
  //   }, [arrivalMessage, currentChat]);

  //   useEffect(() => {
  //     socket.current.emit("addUser", user._id);
  //     socket.current.on("getUsers", (users) => {
  //       setOnlineUsers(
  //         user.followings.filter((f) => users.some((u) => u.userId === f))
  //       );
  //     });
  //   }, [user]);

  //   useEffect(() => {
  //     const getConversations = async () => {
  //       try {
  //         const res = await axios.get("/conversations/" + user._id);
  //         setConversations(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getConversations();
  //   }, [user._id]);

  //   useEffect(() => {
  //     const getMessages = async () => {
  //       try {
  //         const res = await axios.get("/messages/" + currentChat?._id);
  //         setMessages(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getMessages();
  //   }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Test ", e);
    // const message = {
    //   sender: user._id,
    //   text: newMessage,
    //   conversationId: currentChat._id,
    // };

    // const receiverId = currentChat.members.find(
    //   (member) => member !== user._id
    // );

    // socket.current.emit("sendMessage", {
    //   senderId: user._id,
    //   receiverId,
    //   text: newMessage,
    // });

    // try {
    //   const res = await axios.post("/messages", message);
    //   setMessages([...messages, res.data]);
    //   setNewMessage("");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log("sdfsdfsd", currentConversation);

  return (
    <>
      {/* <Topbar /> */}
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* {conversations.map((c) => ( */}
            <div
              /* onClick={() => setCurrentChat(c)} */
              style={{
                background: currentConversation === 1 ? "#e5f8e6" : "none",
              }}
              onClick={() => setCurrentConversation(1)}
            >
              <Conversation /* currentUser={user} */ /* conversation={c} */ />
            </div>
            <div /* onClick={() => setCurrentChat(c)} */
              style={{
                background: currentConversation === 2 ? "#e5f8e6" : "none",
              }}
              onClick={() => setCurrentConversation(2)}
            >
              <Conversation /* currentUser={user} */ /* conversation={c} */ />
            </div>
            {/* ))} */}
          </div>
        </div>

        {/* ____________________________ */}
        <div className="conversationResponsive">
          <IconContext.Provider value={{ color: "black" }}>
            <div className="navbarConversations">
              <Link to="#" className="menu-barss">
                <FaIcons.FaBars
                  onClick={showSidebar}
                  style={{ color: "black" }}
                />
              </Link>
            </div>
            <nav className={sidebar ? "nav-menuu active" : "nav-menuu"}>
              <ul className="nav-menu-itemss" onClick={showSidebar}>
                <li className="navbar-togglee">
                  <Link to="#" className="menu-barss">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>

                {/* {conversations.map((c) => ( */}
                <li
                  className="nav-textt" /* onClick={() => setCurrentChat(c)} */
                >
                  <Link to="#">
                    <div className="conversationRes">
                      <Conversation
                        /* currentUser={user} */ /* conversation={c} */ sidebar={
                          sidebar
                        }
                      />
                    </div>
                  </Link>
                </li>
                <li
                  className="nav-textt" /* onClick={() => setCurrentChat(c)} */
                >
                  <Link to="#">
                    <div className="conversationRes">
                      <Conversation
                        /* currentUser={user} */ /* conversation={c} */ sidebar={
                          sidebar
                        }
                      />
                    </div>
                  </Link>
                </li>
                {/* ))} */}
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
        {/* _______________________ */}

        <div
          className="chatBox"
          style={{ display: sidebar ? "none" : "block" }}
        >
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {/* {messages.map((m) => (
                    <div ref={scrollRef}> */}
                  {/* <Message message={m} own={m.sender === user._id} /> */}
                  <Message />
                  <Message own={true} />
                  <Message />
                  {/* </div>
                  ))} */}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
            //   onlineUsers={onlineUsers}
            //   currentId={user._id}
            //   setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
