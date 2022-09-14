// libs
import React, { useContext, useState } from "react";
import HeaderButton from "../HeaderButton";
// context
import { LocaleContext } from "@/contexts";
// style
import "./styles.scss";

const HeaderButtonListContainer = () => {
  // locale
  const locale = useContext(LocaleContext);
  const listButtons = locale.locale.headerButton;
  // selected button
  const [selectedButton, setSelectedButton] = useState({});
  return (
    <div className="header-button-list-container">
      {listButtons.map((button) => (
        <HeaderButton
          key={button.id}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          {...button}
        />
      ))}
    </div>
  );
};

export default HeaderButtonListContainer;
