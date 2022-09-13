// libs
import React from "react";
import HeaderButton from "../HeaderButton";
// style
import "./styles.scss";

const listButtons = [
  { id: 1, keyButton: "F1", label: "▼", type: "increasePage" },
  { id: 2, keyButton: "F3", label: "▲", type: "decreasePage" },
  { id: 3, keyButton: "F4", label: "Hide Checkout" },
  { id: 4, keyButton: "F5", label: "Refresh" },
  { id: 6, keyButton: "F12", label: "VI" }
];

const HeaderButtonListContainer = () => (
  <div className="header-button-list-container">
    {listButtons.map((button) => (
      <HeaderButton key={button.id} {...button} />
    ))}
  </div>
);

export default HeaderButtonListContainer;
