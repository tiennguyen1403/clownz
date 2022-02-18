import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./home.scss";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";
import Blogs from "../../components/Blogs";
import ProductList from "../../components/ProductList";
import axiosClient from "../../api/axiosClient";

function Home() {
  const navigate = useNavigate();
  const [newList, setNewList] = useState(null);
  const [topList, setTopList] = useState(null);
  const [bottomList, setBottomList] = useState(null);
  const [accessoryList, setAccessoryList] = useState(null);

  const fetchNewList = () => {
    axiosClient
      .get("products?_page=1&_limit=15")
      .then((res) => {
        setNewList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTopList = () => {
    axiosClient
      .get("products?_page=1&_limit=15&category=jacket&category=hoodie")
      .then((res) => {
        setTopList(res.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchBottomList = () => {
    axiosClient
      .get("products?_page=1&_limit=15&category=pants&category=shorts")
      .then((res) => {
        setBottomList(res.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchAccessoryList = () => {
    axiosClient
      .get(
        "products?_page=1&_limit=15&category=caps&category=accessory&category=backpack&category=bag"
      )
      .then((res) => {
        setAccessoryList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNewList();
    fetchTopList();
    fetchBottomList();
    fetchAccessoryList();
  }, []);

  return (
    <div className="home">
      <Carousel />
      <div className="main-content">
        <div className="new-arrival">
          <h2>
            <a href="#a">New arrival</a>
          </h2>
          <div className="new-arrival__category">
            <a href="#a">top</a>
            <a href="#a">bottom</a>
            <a href="#a">accessory</a>
          </div>
          <ProductList productList={newList} />
          <button>xem tất cả new arrival</button>
        </div>
        <Category />
        <div className="top">
          <h2>
            <a href="#a">top</a>
          </h2>
          <div className="top__category">
            <a href="#a">hoodie</a>
            <a href="#a">sweatshirt</a>
            <a href="#a">jacket</a>
            <a href="#a">t-shirt</a>
            <a href="#a">shirt</a>
          </div>
          <ProductList productList={topList} />
          <button>xem tất cả top</button>
        </div>
        <div className="bottom">
          <h2>
            <a href="#a">bottom</a>
          </h2>
          <div className="bottom__category">
            <a href="#a">Jeans &#38; Denim</a>
            <a href="#a">Pants</a>
          </div>
          <ProductList productList={bottomList} />
          <button>xem tất cả bottom</button>
        </div>
        <div className="accessory">
          <h2>
            <a href="#a">accessory</a>
          </h2>
          <div className="accessory__category">
            <a href="#a">bag</a>
            <a href="#a">backpack</a>
            <a href="#a">others</a>
            <a href="#a">hat</a>
          </div>
          <ProductList productList={accessoryList} />
          <button>xem tất cả accessory</button>
        </div>
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
