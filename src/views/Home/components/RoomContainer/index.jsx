// libs
import React from "react";
// mocks
import { roomStatusList } from "@/mocks";
// style
import "./styles.scss";

const RoomContainer = ({ roomNo, roomType, personName, night, status }) => {
  const calculateBackgroundColor = () => {
    const roomStatus = roomStatusList.find((room) => room.status === status);
    return roomStatus.color;
  };
  return (
    <div
      className="room-container"
      style={{ background: calculateBackgroundColor() }}
    >
      <div className="room-header">
        <div className="room-id">{roomNo}</div>
        <div>
          <div>{roomType}</div>
          <div>{night}</div>
        </div>
      </div>
      <div className="room-rent-name">{personName}</div>
    </div>
  );
};

export default RoomContainer;
