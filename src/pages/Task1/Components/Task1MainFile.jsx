import React from "react";
import PaginatedItems from "./PaginatedItems/PaginatedItems";

const Task1MainFile = () => {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <PaginatedItems itemsPerPage={5} />
    </div>
  );
};

export default Task1MainFile;
