import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <Link to="/">
            <img
              src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1642756847417"
              alt=""
            />
          </Link>
          <p className="footer-info__location">
            <ion-icon name="location-sharp"></ion-icon> CÔNG TY TNHH 2 THÀNH
            VIÊN CLOWNZ
          </p>
          <p className="footer-info__phone">
            <ion-icon name="call"></ion-icon>
            <a href="#a">058660 8660</a>
          </p>
          <p className="footer-info__mail">
            <ion-icon name="mail"></ion-icon>
            <a href="#a">duong@clownz.vn</a>
          </p>
        </div>
        <div className="footer-contact">
          <h4>Liên hệ</h4>
          <p>
            <ion-icon name="location-sharp"></ion-icon>
            CLOWNZ STORE
          </p>
          <p>
            <ion-icon name="location-sharp"></ion-icon>
            45 Núi Trúc, Ba Đình, HN
          </p>
          <p>
            <ion-icon name="location-sharp"></ion-icon>
            19 Hồ Đắc Di, Đống Đa, HN
          </p>
          <p>
            <ion-icon name="location-sharp"></ion-icon>
            The New Play Ground Vincom Bà Triệu
          </p>
          <p>
            <ion-icon name="location-sharp"></ion-icon>
            Ship COD toàn quốc
          </p>
          <p>
            <ion-icon name="gift-sharp"></ion-icon>
            FREESHIP đơn hàng từ 700.000đ
          </p>
        </div>
        <div className="footer-policy">
          <h4>chính sách</h4>
          <a href="#a">chính sách thành viên</a>
          <a href="#a">chính sách đổi trả</a>
          <a href="#a">chính sách vận chuyển</a>
        </div>
        <div className="footer-register">
          <h4>ĐĂNG KÝ NHẬN TIN</h4>
          <p>
            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
          </p>
          <form action="#">
            <input type="text" placeholder="Email của bạn" />
            <button>đăng ký</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
