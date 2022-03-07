import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Test ", e);
  };

  useEffect(() => {
    console.log("Test ");
  }, [newMessage, typing]);

  const typingHandle = () => {
    if (newMessage.length > 0) {
      setTyping(true);
    } else if (newMessage.length === 0 && typing) {
      setTyping(false);
    }
  };

  return (
    <>
      <Row xs={1} md={2} className="messengerBox g-5 py-5">
        <Col md={12}>
          <Card style={{ height: "79vh" }}>
            <Card.Body style={{ padding: "0" }}>
              <div className="messenger">
                <div className="chatMenu">
                  <div className="chatMenuWrapper">
                    <Conversation />
                  </div>
                </div>

                <div className="chatBox">
                  <div className="chatBoxWrapper">
                    {currentChat ? (
                      <>
                        <div className="chatHeadborder">
                          <FaIcons.FaArrowLeft
                            onClick={() => {
                              navigate("/conversations");
                            }}
                            style={{ color: "black" }}
                            className="chatBackArrow"
                          />
                          <span
                            className="chatHeadUserName"
                            style={{
                              fontWeight: "500",
                              fontSize: "18px",
                              textDecoration: "underline",
                            }}
                          >
                            John Doe
                          </span>
                        </div>
                        <div className="chatBoxTop">
                          <Message />
                          <Message own={true} />
                          <Message />
                          <Message />
                          <Message />
                          <Message />
                          <Message />

                          {typing ? (
                            <div className="typing">
                              <div className="typing__dot"></div>
                              <div className="typing__dot"></div>
                              <div className="typing__dot"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="chatBoxBottom">
                          <textarea
                            className="chatMessageInput"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            onKeyPress={typingHandle}
                          ></textarea>
                          <button
                            className="chatSubmitButton"
                            onClick={handleSubmit}
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
                    <ChatOnline />
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
