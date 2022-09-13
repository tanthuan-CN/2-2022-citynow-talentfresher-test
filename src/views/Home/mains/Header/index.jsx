// libs
import React, { useState } from "react";
// components
import RoomStatusListContainer from "../../components/RoomStatusListContainer";
import PaginationCurrentPage from "../../components/PaginationCurrentPage";
import HeaderButtonListContainer from "../../components/HeaderButtonListContainer";
// styles
import "./styles.scss";

const Header = () => {
  const [pageNumber] = useState(0);
  return (
    <div className="header-container">
      <RoomStatusListContainer />
      <PaginationCurrentPage pageNumber={pageNumber} />
      <HeaderButtonListContainer />
    </div>
  );
};

export default Header;
