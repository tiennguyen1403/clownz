import React, { useState, useEffect } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
import { notification } from "antd";

import "./header.scss";

function Header() {
  //third-party state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //local state
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [keyword, setKeyword] = useState("");
  //global state
  const userInfo = useSelector((state) => state.user.userInfo);

  const handleSearchClickAway = () => {
    if (isSearch) setIsSearch(false);
  };
  const handleMenuClickAway = () => {
    if (isMenu) setIsMenu(false);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) setIsFixed(true);
    else setIsFixed(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accesstoken");
    dispatch({ type: "RESET" });
    setIsMenu(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword === "") {
      notification.warning({
        description: "Bạn chưa nhập từ khóa",
      });
      return false;
    }
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ keyword })}`,
    });
    setIsSearch(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ClickAwayListener onClickAway={handleSearchClickAway}>
        <div className={`header ${isFixed && "fixed"}`}>
          <div className={`search-bar ${isSearch && "show-search"}`}>
            <form action="#" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Bạn cần tìm gì hôm nay?"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button>
                  <ion-icon name="search"></ion-icon>
                </button>
              </div>
            </form>
            <button className="close-btn" onClick={() => setIsSearch(false)}>
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          <ClickAwayListener onClickAway={handleMenuClickAway}>
            <div className={`menu ${isMenu && "show-menu"}`}>
              <ul>
                <li>
                  <a href="#a">clz x hnb</a>
                </li>
                <li>
                  <a href="#a">top</a>
                </li>
                <li>
                  <a href="#a">bottom</a>
                </li>
                <li>
                  <a href="#a">accessory</a>
                </li>
                <li>
                  <Link to="/magazine" onClick={() => setIsMenu(false)}>
                    magazine
                  </Link>
                </li>
                <li>
                  <a href="#a">the winter soldier</a>
                </li>
                {userInfo ? (
                  <>
                    <li>
                      <button>Xin chào, {userInfo?.name}</button>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="login-btn">
                        Đăng nhập
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="signup-btn">
                        Đăng ký
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </ClickAwayListener>
          <div className="container">
            <div className="menu-toggle">
              <button onClick={() => setIsMenu(true)}>
                <ion-icon name="menu"></ion-icon>
              </button>
            </div>
            <div className="contact">
              <p>
                HOTLINE ĐẶT HÀNG: <span>058660 8660</span>
              </p>
            </div>
            <div className="logo">
              <Link to="/">
                <img
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1642756847417"
                  alt=""
                />
              </Link>
            </div>
            <div className="right-nav">
              <button className="cart-btn">
                <span>Giỏ hàng</span>
                <ion-icon name="cart-sharp"></ion-icon>
                <span className="cart-quantity">17</span>
              </button>
              <button className="search-btn" onClick={() => setIsSearch(true)}>
                <ion-icon name="search"></ion-icon>
              </button>
            </div>
          </div>
          <div className="container-navs">
            <ul>
              <li>
                <a href="#a">clz x hnb</a>
              </li>
              <li>
                <a href="#a">
                  top <ion-icon name="chevron-down"></ion-icon>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#a">hoodie</a>
                  </li>
                  <li>
                    <a href="#a">sweetshirt</a>
                  </li>
                  <li>
                    <a href="#a">jacket</a>
                  </li>
                  <li>
                    <a href="#a">t-shirt</a>
                  </li>
                  <li>
                    <a href="#a">shirt</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#a">
                  bottom <ion-icon name="chevron-down"></ion-icon>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#a">Jeans &#38; Denim</a>
                  </li>
                  <li>
                    <a href="#a">pants</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#a">
                  accessory <ion-icon name="chevron-down"></ion-icon>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#a">bag</a>
                  </li>
                  <li>
                    <a href="#a">backpack</a>
                  </li>
                  <li>
                    <a href="#a">others</a>
                  </li>
                  <li>
                    <a href="#a">hat</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/magazine">magazine</Link>
              </li>
              <li>
                <a href="#a">the winter soldier</a>
              </li>
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}

export default Header;
