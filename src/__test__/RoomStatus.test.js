// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import RoomStatus from "@/views/Home/components/RoomStatus";

describe("Room status component test", () => {
  it("Test status of Room Status component", () => {
    render(<RoomStatus backGroundColor="blue" status="test" />);

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("Test background color of Room Status component", () => {
    const { container } = render(
      <RoomStatus backGroundColor="blue" status="test" />
    );
    const element = container.getElementsByClassName("room-status-color")[0];
    const styles = getComputedStyle(element);

    expect(styles.backgroundColor).toBe("blue");
  });
});
