// import axios from "axios";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./menu.css";
import { IconContext } from "react-icons";
import "./conversation.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  ListGroup,
  Card,
  Row,
  Col,
  ListGroupItem,
} from "react-bootstrap";
import "../../screens/messenger/messenger.css";
import Conversation from "./Conversation";
import { Navigate, useNavigate } from "react-router-dom"

export default function Conversations({ conversation, currentUser, sidebar }) {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => {
  //   setSidebar(!sidebar)
  //   sidebarr(!sidebar)
  // }

  const navigate = useNavigate();

  return (
    <>
      <Card style={{ height: "81vh" }}>
        <Card.Body style={{ padding: "0" }}>
          {/* <div className="messenger"> */}
            <div
              className="chatMenu"
              // style={{ display: sidebar ? "block" : "none" }}
            >
              <div className="chatMenuWrapper">
                <div className="convsHeadborder">All Conversations</div>
                {/* <div className="conversationsScroll"> */}
                  <div className="conversationRes convborder" onClick={() => {
                      navigate("/messenger");
                  }}>
                    <img
                      className="conversationImg"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                    <span className="conversationName">John Doe</span>
                  </div>
                  <div className="conversationRes convborder">
                    <img
                      className="conversationImg"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                    <span className="conversationName">John Doe</span>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </Card.Body>
      </Card>

      {/* <div className="conversation convborder">
        <img
          className="conversationImg"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <span className="conversationName">John Doe</span>
      </div> */}
    </>
  );
}
