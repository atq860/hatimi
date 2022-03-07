import "./message.css";

export default function Message({ own }) {
  return (
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong className="">{own ? "Me" : "John Doe"}</strong>
          <p className=" messageText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            ut, nisi, beatae totam cumque esse illo autem fuga ab dolor facere
            magni? Officiis alias commodi nemo voluptatibus qui a eius.
          </p>
        </div>
      </div>
    </div>
  );
}
