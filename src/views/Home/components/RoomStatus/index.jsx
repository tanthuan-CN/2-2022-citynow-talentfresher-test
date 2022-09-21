// libs
import React from "react";
// style
import "./styles.scss";

const RoomStatus = ({ backGroundColor, status }) => (
  <div className="room-status-container" data-cy="room-status">
    <div
      className="room-status-color"
      style={{ backgroundColor: backGroundColor }}
    ></div>
    <div className="room-status-status">{status}</div>
  </div>
);

export default RoomStatus;
