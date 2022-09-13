// libs
import React, { useState } from "react";
// components
import Header from "./mains/Header";
import RoomListContainer from "./mains/RoomListContainer";
import { PageProvider } from "@/contexts";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <PageProvider value={{ pageNumber, setPageNumber }}>
      <div>
        <Header />
        <RoomListContainer />
      </div>
    </PageProvider>
  );
};

export default Home;
