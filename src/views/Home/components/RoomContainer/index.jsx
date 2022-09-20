// libs
import React, { useContext } from "react";
// mocks
import { roomStatusList } from "@/mocks";
// context
import { CheckoutContext } from "@/contexts";
// style
import "./styles.scss";

const RoomContainer = ({ roomNo, roomType, personName, night, status }) => {
  // context
  const checkout = useContext(CheckoutContext);
  const calculateBackgroundColor = () => {
    const roomStatus = roomStatusList.find((room) => room.status === status);
    return roomStatus.color;
  };
  return (
    <div
      className="room-container"
      style={{
        background: calculateBackgroundColor(),
        visibility:
          status === "ALREADY_OUT" && checkout.isCheckout ? "hidden" : "visible"
      }}
      data-cy="room-container"
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
