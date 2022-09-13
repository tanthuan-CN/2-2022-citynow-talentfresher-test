// libs
import React, { useContext } from "react";
// context
import PageContext from "@/contexts";
// style
import "./styles.scss";

const HeaderButton = ({ keyButton, label, type }) => {
  const page = useContext(PageContext);
  const handleButtonClick = () => {
    alert("123");
    if (type === "increasePage" && page.pageNumber !== 2) {
      page.setPageNumber(page.pageNumber + 1);
    } else if (type === "decreasePage" && page.pageNumber !== 0) {
      page.setPageNumber(page.pageNumber - 1);
    }
  };
  return (
    <div
      className="header-button-container"
      onClick={() => handleButtonClick()}
    >
      <div className="header-button-content">
        <div className="key-button">{keyButton}</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default HeaderButton;
