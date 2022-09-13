// libs
import React from "react";
// components
import RoomContainer from "../../components/RoomContainer";
// mocks
import { roomData } from "@/mocks";
// styles
import "./styles.scss";

const RoomListContainer = () => (
  <div className="room-list-container">
    {roomData.map((room) => (
      <RoomContainer key={room.id} {...room} />
    ))}
  </div>
);

export default RoomListContainer;
