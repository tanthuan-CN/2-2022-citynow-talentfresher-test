// libs
import React from "react";
// components
import RoomContainer from "../../components/RoomContainer";
// styles
import "./styles.scss";

const RoomListContainer = ({ roomData }) => (
  <div className="room-list-container">
    {roomData.map((room) => (
      <RoomContainer key={room.id} {...room} />
    ))}
  </div>
);

export default RoomListContainer;
