// import axios from "axios";
// import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const getFriends = async () => {
//       const res = await axios.get("/users/friends/" + currentId);
//       setFriends(res.data);
//     };

//     getFriends();
//   }, [currentId]);

//   useEffect(() => {
//     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   }, [friends, onlineUsers]);

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `/conversations/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div className="chatOnline">
      {/* {onlineFriends.map((o) => ( */}
        <div className="chatOnlineFriend" /* onClick={() => handleClick(o)} */>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">John Doe</span>
        </div>
      {/* ))} */}
    </div>
  );
}