// libs
import React, { useState } from "react";
// mocks
import { roomData } from "@/mocks";
// utils
import { paginate } from "../../utils/paginate.js";
// components
import Header from "./mains/Header";
import RoomListContainer from "./mains/RoomListContainer";
import { PageProvider } from "@/contexts";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const paginateRoomData = paginate(roomData, pageNumber, 140);
  return (
    <PageProvider value={{ pageNumber, setPageNumber }}>
      <div>
        <Header />
        <RoomListContainer roomData={paginateRoomData} />
      </div>
    </PageProvider>
  );
};

export default Home;
