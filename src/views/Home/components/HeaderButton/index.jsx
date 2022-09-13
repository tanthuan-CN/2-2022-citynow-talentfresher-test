// libs
import React from "react";
// style
import "./styles.scss";

const HeaderButton = ({ keyButton, label }) => (
  <div className="header-button-container">
    <div className="header-button-content">
      <div className="key-button">{keyButton}</div>
      <div>{label}</div>
    </div>
  </div>
);

export default HeaderButton;
