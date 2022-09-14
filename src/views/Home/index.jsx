// libs
import React, { useState, useRef, useEffect } from "react";
// locales
import locales from "@/locales";
// mocks
import { roomData, arrStatus } from "@/mocks";
// utils
import { paginate } from "../../utils/paginate.js";
// components
import Header from "./mains/Header";
import RoomListContainer from "./mains/RoomListContainer";
import {
  PageProvider,
  CheckoutProvider,
  RoomsProvider,
  LocaleProvider
} from "@/contexts";

const Home = () => {
  // pageNumber
  const [pageNumber, setPageNumber] = useState(0);
  // checkout
  const [isCheckout, setIsCheckout] = useState(false);
  // rooms
  const [roomsData, setRoomsData] = useState(roomData);
  // locale
  const [locale, setLocale] = useState(locales.en);
  // home component
  const home = useRef(null);
  useEffect(() => {
    if (home.current) {
      home.current.focus();
    }
  }, []);
  // paginate data
  const paginateRoomData = paginate(roomsData, pageNumber, 140);

  const handleKeyBoard = (e) => {
    e.preventDefault();
    if (e.code === "F1" && pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    } else if (e.code === "F3" && pageNumber < 2) {
      setPageNumber(pageNumber + 1);
    } else if (e.code === "F4") {
      setIsCheckout(!isCheckout);
    } else if (e.code === "F5") {
      const newRoomsData = [...roomsData];
      for (let i = 0; i < newRoomsData.length; i += 1) {
        newRoomsData[i].status = arrStatus[Math.floor(Math.random() * 4)];
      }
      setRoomsData(newRoomsData);
    } else if (e.code === "F12") {
      const newLocale =
        locale.headerButton[4].label === "VI" ? locales.vi : locales.en;
      setLocale(newLocale);
    }
  };
  return (
    <LocaleProvider value={{ locale, setLocale }}>
      <PageProvider value={{ pageNumber, setPageNumber }}>
        <CheckoutProvider value={{ isCheckout, setIsCheckout }}>
          <RoomsProvider value={{ roomsData, setRoomsData }}>
            <div
              className="home"
              onKeyDown={(e) => handleKeyBoard(e)}
              tabIndex="0"
              ref={home}
            >
              <Header />
              <RoomListContainer roomData={paginateRoomData} />
            </div>
          </RoomsProvider>
        </CheckoutProvider>
      </PageProvider>
    </LocaleProvider>
  );
};

export default Home;
