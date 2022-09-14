// libs
import React, { useContext } from "react";
// context
import { PageContext } from "@/contexts";
// style
import "./styles.scss";

const PaginationCurrentPage = () => {
  const page = useContext(PageContext);
  return (
    <div className="pagination-current-page">PAGE: {page.pageNumber + 1}/3</div>
  );
};

export default PaginationCurrentPage;
