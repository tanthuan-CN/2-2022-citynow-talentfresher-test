// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// context
import { CheckoutProvider } from "@/contexts";
// component
import RoomContainer from "@/views/Home/components/RoomContainer";

describe("Roomcontainer component test", () => {
  // Varibles
  const roomNo = "1200";
  const status = "ALREADY_OUT";
  const isCheckout = false;
  const roomType = "ABC";
  const personName = "Nhan";
  const night = 10;
  it("Test render status", () => {
    // Action
    render(
      <CheckoutProvider value={{ isCheckout }}>
        <RoomContainer roomNo={roomNo} status={status} />
      </CheckoutProvider>
    );
    // Assert
    expect(screen.getByText(roomNo)).toBeInTheDocument();
  });

  it("Test render roomType", () => {
    // Action
    render(
      <CheckoutProvider value={{ isCheckout }}>
        <RoomContainer roomType={roomType} status={status} />
      </CheckoutProvider>
    );
    // Assert
    expect(screen.getByText(roomType)).toBeInTheDocument();
  });

  it("Test render personName", () => {
    // Action
    render(
      <CheckoutProvider value={{ isCheckout }}>
        <RoomContainer personName={personName} status={status} />
      </CheckoutProvider>
    );
    // Assert
    expect(screen.getByText(personName)).toBeInTheDocument();
  });

  it("Test render night", () => {
    // Action
    render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer night={night} status="ALREADY_OUT" />
      </CheckoutProvider>
    );
    // Assert
    expect(screen.getByText(night)).toBeInTheDocument();
  });

  it("Test render status color", () => {
    // Arrange
    // convert rgba to hex
    const roomContainer = "room-container";
    const resultBackgroundColor = "#b79a5b";
    const rgba2hex = (rgba) =>
      `#${rgba
        .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
        .slice(1)
        .map((n, i) =>
          (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
            .toString(16)
            .padStart(2, "0")
            .replace("NaN", "")
        )
        .join("")}`;
    // Action
    const { container } = render(
      <CheckoutProvider value={{ isCheckout }}>
        <RoomContainer status={status} />
      </CheckoutProvider>
    );
    const element = container.getElementsByClassName(roomContainer)[0];
    const styles = getComputedStyle(element);
    const backgroundColor = rgba2hex(styles.backgroundColor);
    // Assert
    expect(backgroundColor).toBe(resultBackgroundColor);
  });
});
