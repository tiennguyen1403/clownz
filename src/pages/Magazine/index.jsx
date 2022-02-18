import React, { useState, useEffect } from "react";
import { Pagination } from "antd";

import "./magazine.scss";
import axiosClient from "../../api/axiosClient";
import Loader from "../../components/Loader";

function Magazine() {
  const [blogList, setBlogList] = useState([]);
  const [page, setPage] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const limit = 6;
  const total = Math.ceil(blogList.length / limit) * 10;

  const fetchPostList = () => {
    axiosClient
      .get("blogs")
      .then((res) => {
        setBlogList(res.data);
        setPage(res.data.splice(0, limit));
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = (page) => {
    const skip = page * limit - limit;
    let newList = [...blogList].splice(skip, limit);
    setPage(newList);
    setPageIndex(page);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  if (!blogList) return <Loader />;
  return (
    <div className="magazine">
      <div className="magazine-cover">
        <h1>MAGAZINE</h1>
      </div>
      <div className="magazine-main-content">
        <div className="magazine-list">
          {page.map((post, index) => (
            <div className="magazine-item" key={index}>
              <div className="magazine-thumb">
                <img src={post?.imageUrl} alt="" />
              </div>
              <h4 className="magazine-title">{post?.title}</h4>
              <p className="magazine-desc">{post?.desc}</p>
            </div>
          ))}
        </div>
        <Pagination
          onChange={handlePageChange}
          current={pageIndex}
          total={total}
        />
      </div>
    </div>
  );
}

export default Magazine;
