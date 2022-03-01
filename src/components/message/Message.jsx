import "./message.css";
// import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        {/* <p className="messageText">{message.text}</p> */}
        <p className="messageText">Test</p>
      </div>
      <div className="messageBottom">2 mins ago</div>
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}
