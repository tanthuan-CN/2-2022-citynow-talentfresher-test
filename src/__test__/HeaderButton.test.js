// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import HeaderButton from "@/views/Home/components/HeaderButton";

describe("HeaderButton component test", () => {
  it("Test HeaderButton render label", () => {
    render(<HeaderButton label="Hide checkout" selectedButton="F1" />);

    expect(screen.getByText("Hide checkout")).toBeInTheDocument();
  });

  it("Test HeaderButton active classname", () => {
    const { container } = render(
      <HeaderButton
        keyButton="F1"
        label="Hide checkout"
        selectedButton="Hide checkout"
      />
    );

    expect(container.getElementsByClassName("active").length).toBe(1);
  });
});
