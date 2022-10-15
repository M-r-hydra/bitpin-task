// React
import React, { useState, useEffect } from "react";
// React
// Modules
import axios from "axios";
import ReactPaginate from "react-paginate";
// Modules
// CSS And Animation
import { Fade } from "react-awesome-reveal";
import styles from "./PaginatedItems.module.css";
// CSS And Animation
// Components
import Card from "../Card/Card";
// Components

function PaginatedItems({ itemsPerPage }) {
  // state For initialize Data that fetch from the server
  const [data, setData] = useState([]);
  //**
  // current Items stored in here by paginating Number
  const [pageCount, setPageCount] = useState(0);
  //   // page Count that Maked by react Pagination
  const [itemOffset, setItemOffset] = useState(0);
  //   // item offset that Maked by react Pagination
  //   **
  // state For initialize Data that fetch from the server
  //   **
  // current Items stored in here by paginating Number
  const [currentItems, setCurrentItems] = useState([]);
  // current Items stored in here by paginating Number
  //   **
  // Here We Call the server for fethching Data and store it in our state
  useEffect(() => {
    axios.get("https://api.bitpin.ir/v1/mkt/markets/").then(function (res) {
      setData(res.data.results);
    });
  }, []);
  //   **
  //   in here we set our State by page number
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  //   in here we set our State by page number
  // Here We Call the server for fethching Data and store it in our state
  //   **
  //   Our click handler that setted New Offset
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  //   Our click handler that setted New Offset

  return (
    <div className={styles.paginationItemsContainer}>
      {currentItems.length === 0 ? (
        <h1 style={{ fontSize: "15rem" }}>Receiving Data</h1>
      ) : (
        currentItems.map((item) => {
          return (
            <Fade key={item.id} duration={700}>
              <Card
                currency1={item.currency1}
                currency2={item.currency2}
                nameEn={item.currency1.title}
                nameFa={item.currency1.title_fa}
                priceRial={item.price}
                change={item.price_info.change}
                min={item.price_info.min}
                max={item.price_info.max}
              />
            </Fade>
          );
        })
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;
