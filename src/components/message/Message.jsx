import "./message.css";
// import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    // <div className={own ? "message own" : "message"}>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        {/* <p className="messageText">{message.text}</p> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong className="">{own ? "Me" : "John Doe"}</strong>
          <p className=" messageText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            ut, nisi, beatae totam cumque esse illo autem fuga ab dolor facere
            magni? Officiis alias commodi nemo voluptatibus qui a eius.
          </p>
        </div>
      </div>
      {/* <div className="messageBottom">2 mins ago</div> */}
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}
