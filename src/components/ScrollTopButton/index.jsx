import React, { useState, useEffect } from "react";

import "./scroll-top-button.scss";

function ScrollTopButton() {
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) setIsShow(true);
    else setIsShow(false);
  };
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`scroll-top-button ${isShow && "show-scroll-top-button"}`}>
      <span onClick={handleClick}>
        Lên đầu trang <ion-icon name="arrow-forward"></ion-icon>
      </span>
    </div>
  );
}

export default ScrollTopButton;
