import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./conversation.css";
import "../../screens/messenger/messenger.css";

export default function Conversation() {
  const navigate = useNavigate();

  const [currentConversation, setCurrentConversation] = useState(null);

  return (
    <Card style={{ height: "78vh", border: "none" }} className="cardHeight">
      <Card.Body style={{ padding: "0" }}>
        <div className="convHeadborder">All Conversations</div>
        <div className="conversationsScroll">
          <div
            className="conversation convborder backColorFocus"
            style={{
              background: currentConversation === 1 ? "#e5f8e6" : "none",
            }}
            onClick={() => setCurrentConversation(1)}
          >
            <img
              className="conversationImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <span className="conversationName">John Doe</span>
          </div>
          <div
            className="conversation convborder backColorFocus"
            style={{
              background: currentConversation === 2 ? "#e5f8e6" : "none",
            }}
            onClick={() => setCurrentConversation(2)}
          >
            <img
              className="conversationImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <span className="conversationName">John Doe</span>
          </div>
        </div>

        {/* Responsive */}
        {/* <div className="conversationResponsive"> */}
        <div className="conversationResponsive">
          <div
            className="conversation convborder"
            onClick={() => navigate("/messenger")}
          >
            <img
              className="conversationImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <span className="conversationName">John Doe</span>
          </div>
          <div
            className="conversation convborder"
            onClick={() => navigate("/messenger")}
          >
            <img
              className="conversationImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <span className="conversationName">John Doe</span>
          </div>
        </div>
        {/* </div> */}
      </Card.Body>
    </Card>
  );
}
