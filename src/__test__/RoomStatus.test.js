// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import RoomStatus from "@/views/Home/components/RoomStatus";

describe("Room status component test", () => {
  // Varibles
  const backGroundColor = "blue";
  const status = "this is a status";
  const roomStatusColor = "room-status-color";
  it("Test status of Room Status component", () => {
    // Action
    render(<RoomStatus backGroundColor={backGroundColor} status={status} />);
    // Assert
    expect(screen.getByText(status)).toBeInTheDocument();
  });

  it("Test background color of Room Status component", () => {
    // Action
    const { container } = render(
      <RoomStatus backGroundColor={backGroundColor} status={status} />
    );
    const element = container.getElementsByClassName(roomStatusColor)[0];
    const styles = getComputedStyle(element);
    // Assert
    expect(styles.backgroundColor).toBe(backGroundColor);
  });
});
