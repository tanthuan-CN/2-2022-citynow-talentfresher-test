import { screen } from "@testing-library/react";
// import FavoriteArtist from "src/views/Home/mains/FavoriteArtist";
import "@testing-library/jest-dom";

describe("Favorite Artist component", () => {
  it("renders Favorite Artist component", () => {
    // render(<FavoriteArtist />);

    const heading = screen.getByRole("heading", {
      name: /Nghệ Sĩ Yêu Thích/i
    });

    expect(heading).toBeInTheDocument();
  });
});
