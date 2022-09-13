// libs
import React from "react";
// components
import RoomStatus from "../RoomStatus";
// mocks
import { roomStatusList } from "src/mocks";
// style
import "./styles.scss";

const RoomStatusListContainer = () => (
  <div className="room-status-list-container">
    {roomStatusList.map((roomStatus) => (
      <RoomStatus
        key={roomStatus.status}
        backGroundColor={roomStatus.color}
        status={roomStatus.status}
      />
    ))}
  </div>
);

export default RoomStatusListContainer;
