import React, { useState, useEffect } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
import { notification, Modal, Table, Button } from "antd";

import "./header.scss";

function Header() {
  //third-party state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //local state
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [keyword, setKeyword] = useState("");
  //global state
  const userInfo = useSelector((state) => state.user.userInfo);
  const cart = useSelector((state) => state.product.cart);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (imageUrl) => <img src={imageUrl} className="cart__img" alt="" />,
      key: "image",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "",
      dataIndex: "remove",
      key: "remove",
    },
  ];
  const data = cart.map((item, index) => {
    return {
      key: index + 1,
      image: item.info.imageUrl,
      name: item.info.name,
      price: item.info.price,
      quantity: item.quantity,
      total: item.info.price * item.quantity,
      remove: (
        <span className="cart__remove" onClick={() => handleRemove(item.id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      ),
    };
  });

  const handleSearchClickAway = () => {
    if (isSearch) setIsSearch(false);
  };
  const handleMenuClickAway = () => {
    if (isMenu) setIsMenu(false);
  };
  const handleToggleCart = () => {
    setIsShowCart(!isShowCart);
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };
  const handleBuy = () => {
    dispatch({ type: "RESET_PRODUCT" });
    handleToggleCart();
    notification.success({
      description: "Thank you! Have a good day ^^",
    });
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
              <button className="cart-btn" onClick={handleToggleCart}>
                <span>Giỏ hàng</span>
                <ion-icon name="cart-sharp"></ion-icon>
                <span className="cart-quantity">{cart.length}</span>
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
      <Modal
        title="Product Cart"
        visible={isShowCart}
        onCancel={handleToggleCart}
        width={700}
        footer={[
          <Button onClick={handleToggleCart}>Cancel</Button>,
          <Button type="primary" onClick={handleBuy}>
            Buy now
          </Button>,
        ]}
      >
        <Table dataSource={data} columns={columns} pagination={false} />
      </Modal>
    </>
  );
}

export default Header;
