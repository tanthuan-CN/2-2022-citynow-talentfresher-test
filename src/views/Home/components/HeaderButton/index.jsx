// libs
import React, { useContext } from "react";
import classNames from "classnames";
// context
import {
  PageContext,
  CheckoutContext,
  RoomsContext,
  LocaleContext
} from "@/contexts";
// locales
import locales from "@/locales";
// mocks
import { arrStatus } from "@/mocks";
// style
import "./styles.scss";

const HeaderButton = ({
  keyButton,
  label,
  secondLabel = "",
  type,
  selectedButton,
  setSelectedButton
}) => {
  const page = useContext(PageContext);
  // locale context
  const locale = useContext(LocaleContext);
  // checkout context
  const checkout = useContext(CheckoutContext);
  // rooms context
  const rooms = useContext(RoomsContext);
  // func
  const handleButtonClick = () => {
    if (type === "increasePage" && page.pageNumber !== 2) {
      page.setPageNumber(page.pageNumber + 1);
    } else if (type === "decreasePage" && page.pageNumber !== 0) {
      page.setPageNumber(page.pageNumber - 1);
    } else if (type === "hideCheckout") {
      checkout.setIsCheckout(!checkout.isCheckout);
    } else if (type === "refresh") {
      const newRoomsData = [...rooms.roomsData];
      for (let i = 0; i < newRoomsData.length; i += 1) {
        newRoomsData[i].status = arrStatus[Math.floor(Math.random() * 4)];
      }
      rooms.setRoomsData(newRoomsData);
    } else if (type === "changeLocale") {
      const newLocale = label === "VI" ? locales.vi : locales.en;
      locale.setLocale(newLocale);
    }

    setSelectedButton({ ...selectedButton, type });
  };

  const renderLabel = () =>
    checkout.isCheckout && type === "hideCheckout" ? secondLabel : label;

  const handleKeyPress = (e) => {
    if (e.key === "f1") {
      page.setPageNumber(page.pageNumber + 1);
    } else if (e.key === "f3") {
      page.setPageNumber(page.pageNumber - 1);
    } else if (e.key === "f3") {
      checkout.setIsCheckout(!checkout.isCheckout);
    } else if (e.key === "f5") {
      const newRoomsData = [...rooms.roomsData];
      for (let i = 0; i < newRoomsData.length; i += 1) {
        newRoomsData[i].status = arrStatus[Math.floor(Math.random() * 4)];
      }
      rooms.setRoomsData(newRoomsData);
    } else if (e.key === "f12") {
      const newLocale = label === "VI" ? locales.vi : locales.en;
      locale.setLocale(newLocale);
    }
  };
  return (
    <button
      className={classNames("header-button-container", {
        active: type === selectedButton.type
      })}
      onClick={() => handleButtonClick()}
      type="button"
      onKeyUp={(e) => handleKeyPress(e)}
    >
      <div className="header-button-content">
        <div className="key-button">{keyButton}</div>
        <div>{renderLabel()}</div>
      </div>
    </button>
  );
};

export default HeaderButton;
