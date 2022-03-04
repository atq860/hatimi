import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import Conversation from "../../components/conversations/Conversation";
import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import "./messenger.css";
import "../../components/conversations/menu.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import "../../components/conversations/menu.css";
import { IconContext } from "react-icons";
import "../../components/conversations/conversation.css";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";

export default function MessengerScreen(props) {
  const [currentChat, setCurrentChat] = useState(true);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [sidebar, setSidebar] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const showSidebar = () => {
    setSidebar(!sidebar);
    // sidebarr(!sidebar)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Test ", e);
  };

  return (
    <>
      <Row xs={1} md={2} className="messengerBox g-5 py-5">
        <Col md={12}>
          <Card style={{ height: "79vh" }}>
            <Card.Body style={{ padding: "0" }}>
              <div className="messenger">
                <div
                  className="chatMenu"
                  // style={{ display: sidebar ? "block" : "none" }}
                >
                  <div className="chatMenuWrapper">
                    <div className="convHeadborder">All Conversations</div>
                    <div className="conversationsScroll">
                      <div
                        style={{
                          background:
                            currentConversation === 1 ? "#e5f8e6" : "none",
                        }}
                        onClick={() => setCurrentConversation(1)}
                      >
                        <Conversation />
                      </div>
                      <div
                        style={{
                          background:
                            currentConversation === 2 ? "#e5f8e6" : "none",
                        }}
                        onClick={() => setCurrentConversation(2)}
                      >
                        <Conversation />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ____________________________ */}
                {/* <div className="conversationResponsive">
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

                        {conversations.map((c) => (
                          <li
                            className="nav-textt"
                            onClick={() => setCurrentChat(c)}
                          >
                            <Link to="#">
                              <div className="conversationRes">
                                <Conversation
                                  currentUser={user}
                                  conversation={c}
                                  sidebar={sidebar}
                                />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </IconContext.Provider>
                </div> */}
                {/* _______________________ */}

                <div
                  className="chatBox"
                  style={{ display: sidebar ? "none" : "block" }}
                >
                  <div className="chatBoxWrapper">
                    <div className="chatHeadborder">
                      <FaIcons.FaArrowLeft
                        // onClick={showSidebar}
                        onClick={() => {
                          navigate("/conversations");
                          // props.history.push("/conversations");
                          // setSidebar(!sidebar);
                          // console.log("test", sidebar);
                        }}
                        style={{ color: "black" }}
                        className="chatBackArrow"
                      />
                      <span className="chatHeadUserName">John Doe</span>
                    </div>
                    {currentChat ? (
                      <>
                        <div className="chatBoxTop">
                          <Message />
                          <Message own={true} />
                          <Message />
                          <Message />
                          <Message />
                          <Message />
                          <Message />
                        </div>
                        <div className="chatBoxBottom">
                          {/* <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          > */}
                          <textarea
                            className="chatMessageInput"
                            // placeholder="write something..."
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                          ></textarea>
                          <button
                            className="chatSubmitButton"
                            onClick={handleSubmit}
                            // style={{marginLeft: "45rem"}}
                          >
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
                    <div className="convHeadborder">Online Friends</div>
                    {/* <div className="conversationsScroll"> */}
                    <ChatOnline />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
