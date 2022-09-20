// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import HeaderButton from "@/views/Home/components/HeaderButton";

describe("HeaderButton component test", () => {
  // varibles
  const label = "Hide checkout";
  const selectedButton = "Hide checkout";
  const keyButton = "F1";
  it("Test HeaderButton render label", () => {
    // Action
    render(<HeaderButton label={label} selectedButton={selectedButton} />);
    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("Test HeaderButton active classname", () => {
    // Action
    const { container } = render(
      <HeaderButton
        keyButton={keyButton}
        label={label}
        selectedButton={selectedButton}
      />
    );
    // Assert
    expect(container.getElementsByClassName("active").length).toBe(1);
  });
});
