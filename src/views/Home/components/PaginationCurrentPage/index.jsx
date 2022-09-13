// libs
import React, { useContext } from "react";
import PageContext from "@/contexts";
// style
import "./styles.scss";

const PaginationCurrentPage = () => {
  const page = useContext(PageContext);
  return <div className="pagination-current-page">PAGE: {page + 1}/3</div>;
};

export default PaginationCurrentPage;
