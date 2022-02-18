import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

import "./search.scss";
import ProductItem from "../../components/ProductItem";
import Loader from "../../components/Loader";
import axiosClient from "../../api/axiosClient";

function Search() {
  //third-party state
  const [searchParams, setSearchParams] = useSearchParams();
  //local state
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const limit = 30; // products per page
  const total = Math.ceil(searchList.length / limit) * 10; //total page
  //router state
  const keyword = searchParams.get("keyword") || "";

  const fetchSeachList = () => {
    axiosClient
      .get(`products?q=${keyword}`)
      .then((res) => {
        setSearchList(res.data);
        setPage(res.data.slice(0, limit));
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = (page) => {
    let skip = page * limit - limit;
    let newList = [...searchList].splice(skip, limit);
    setPage(newList);
    setPageIndex(page);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchSeachList();
  }, [keyword]);

  if (!searchList) return <Loader />;
  return (
    <div className="search">
      <h3 className="search-result">
        CÓ <span>{searchList.length}</span> KẾT QUẢ TÌM KIẾM PHÙ HỢP
      </h3>
      <div className="search-list">
        {page.map((prod, index) => (
          <ProductItem key={index} prod={prod} />
        ))}
      </div>
      <Pagination
        onChange={handlePageChange}
        current={pageIndex}
        total={total}
      />
    </div>
  );
}

export default Search;
