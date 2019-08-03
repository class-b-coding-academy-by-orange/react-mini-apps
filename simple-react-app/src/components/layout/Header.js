import React from "react";
import logo from "./logo.svg";

export default function Header() {
  return (
    <div style={containerStyle}>
      <img src={logo} style={imgStyle} alt="" width="70px" />
      <h6 style={headerStyling}>Simple React App</h6>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "black",
  color: "white",
  height: "100px",
  textAlign: "center",
  position: 'relative',
};

const imgStyle = {
    // position: 'relative',
    // top: '10%'
}

const headerStyling = {
    // textAlign: 'center',
    // position: 'relative',
    // bottom: '0',
}
