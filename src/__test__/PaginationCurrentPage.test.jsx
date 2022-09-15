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
    render(
      <PageProvider value={{ pageNumber: 0 }}>
        <PaginationCurrentPage />
      </PageProvider>
    );

    expect(screen.getByText("PAGE: 1/3")).toBeInTheDocument();
  });
});
