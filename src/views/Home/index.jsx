// libs
import React, { useState } from "react";
// locales
import locales from "@/locales";
// mocks
import { roomData } from "@/mocks";
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
  // paginate data
  const paginateRoomData = paginate(roomsData, pageNumber, 140);
  return (
    <LocaleProvider value={{ locale, setLocale }}>
      <PageProvider value={{ pageNumber, setPageNumber }}>
        <CheckoutProvider value={{ isCheckout, setIsCheckout }}>
          <RoomsProvider value={{ roomsData, setRoomsData }}>
            <div>
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
