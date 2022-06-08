import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      {" "}
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Valiantlynx"
      img="https://i.pinimg.com/564x/66/64/f2/6664f2271d7dfda195c74f0ca7edac91.jpg"
      tel="+123 465 799"
      email="b@valiantlynx.com"
    />
  </div>,
  document.getElementById("root")
);
