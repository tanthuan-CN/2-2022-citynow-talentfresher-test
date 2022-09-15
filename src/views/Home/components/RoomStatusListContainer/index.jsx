// libs
import React, { useContext } from "react";
// context
import { LocaleContext } from "@/contexts";
// components
import RoomStatus from "../RoomStatus";
// style
import "./styles.scss";

const RoomStatusListContainer = () => {
  const locale = useContext(LocaleContext);
  const { roomStatusList } = locale.locale;
  return (
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
};

export default RoomStatusListContainer;
