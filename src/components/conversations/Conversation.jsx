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

export default function Conversation({ conversation, currentUser, sidebar }) {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => {
  //   setSidebar(!sidebar)
  //   sidebarr(!sidebar)
  // }

  //   const [user, setUser] = useState(null);
  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //   useEffect(() => {
  //     const friendId = conversation.members.find((m) => m !== currentUser._id);

  //     const getUser = async () => {
  //       try {
  //         const res = await axios("/users?userId=" + friendId);
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getUser();
  //   }, [currentUser, conversation]);

  // console.log('sdjkf', sidebar);

  return (
    <>
      {sidebar ? (
        <div className="conversationRes convborder">
          <img
            className="conversationImg"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <span className="conversationName">John Doe</span>
        </div>
      ) : (
        <div className="conversation convborder">
          <img
            className="conversationImg"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <span className="conversationName">John Doee</span>
          
        </div>
      )}
    </>
  );
}
