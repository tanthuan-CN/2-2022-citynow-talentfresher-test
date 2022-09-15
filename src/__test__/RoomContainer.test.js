// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// context
import { CheckoutProvider } from "@/contexts";
// component
import RoomContainer from "@/views/Home/components/RoomContainer";

describe("Roomcontainer component test", () => {
  it("Test render status", () => {
    render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer roomNo="1200" status="ALREADY_OUT" />
      </CheckoutProvider>
    );

    expect(screen.getByText("1200")).toBeInTheDocument();
  });

  it("Test render roomType", () => {
    render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer roomType="ABC" status="ALREADY_OUT" />
      </CheckoutProvider>
    );

    expect(screen.getByText("ABC")).toBeInTheDocument();
  });

  it("Test render personName", () => {
    render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer personName="Nhan" status="ALREADY_OUT" />
      </CheckoutProvider>
    );

    expect(screen.getByText("Nhan")).toBeInTheDocument();
  });

  it("Test render night", () => {
    render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer night="10" status="ALREADY_OUT" />
      </CheckoutProvider>
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("Test render status color", () => {
    const { container } = render(
      <CheckoutProvider value={{ isCheckout: false }}>
        <RoomContainer status="ALREADY_OUT" />
      </CheckoutProvider>
    );
    const element = container.getElementsByClassName("room-container")[0];
    // convert rgba to hex
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
    const styles = getComputedStyle(element);

    const backgroundColor = rgba2hex(styles.backgroundColor);
    expect(backgroundColor).toBe("#b79a5b");
  });
});
