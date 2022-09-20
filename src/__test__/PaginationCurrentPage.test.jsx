// libs
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import PaginationCurrentPage from "@/views/Home/components/PaginationCurrentPage";
// context
import { PageProvider } from "@/contexts";

describe("Pagination Current Page component test", () => {
  it("renders Pagination Current Page", () => {
    // Arrange
    const pageNumber = 0;
    const pageText = "PAGE: 1/3";
    // Action
    render(
      <PageProvider value={{ pageNumber }}>
        <PaginationCurrentPage />
      </PageProvider>
    );
    // Assert
    expect(screen.getByText(pageText)).toBeInTheDocument();
  });
});
