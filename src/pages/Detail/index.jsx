import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InputNumber, Tabs } from "antd";
import numeral from "numeral";

import "./detail.scss";
import axiosClient from "../../api/axiosClient";
import Loader from "../../components/Loader";
import ProductList from "../../components/ProductList";

const { TabPane } = Tabs;

function Detail() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [relatedList, setRelatedList] = useState(null);
  const { id } = useParams();

  const fetchProduct = () => {
    if (!id) return null;
    axiosClient
      .get(`products/${id}`)
      .then((res) => {
        setProduct(res.data);
        fetchRelatedList(res.data.category);
      })
      .catch((err) => console.log(err.response.data));
  };
  const fetchRelatedList = (category) => {
    axiosClient
      .get(`products?category=${category}&_page=1&_limit=15`)
      .then((res) => {
        setRelatedList(res.data);
      })
      .catch((err) => console.log(err));
  };
  const addToCart = () => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  console.log(product);

  if (!product) return <Loader />;
  return (
    <div className="detail">
      <div className="detail-content">
        <div className="detail-image">
          <img src={product?.imageUrl} alt="" />
        </div>
        <div className="detail-info">
          <h2 className="detail-name">{product?.name}</h2>
          <p className="detail-price">
            {numeral(product?.price).format(0, 0)}
            <sup>đ</sup>
          </p>
          <p className="detail-status">
            Tình trạng:{" "}
            <span>{product?.stock > 0 ? "Còn hàng" : "Hết hàng"}</span>
          </p>
          <div className="detail-quantity">
            Số lượng: <InputNumber min={1} max={50} defaultValue={1} />
          </div>
          <button className="detail-buy-btn" onClick={addToCart}>
            add to cart
          </button>
          <div className="delivery">
            <span className="delivery-hotline">
              Gọi đặt mua: <a href="#a">058660 8660</a> (miễn phí 8:30 - 21:30).
            </span>
            <p>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/policy_images_2.svg?1642756847417"
                alt=""
              />
              Miễn phí vận chuyển với đơn hàng <span>từ 700.000Đ</span>
            </p>
            <p>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/policy_images_3.svg?1642756847417"
                alt=""
              />
              bảo hành do lỗi nhà sản xuất
            </p>
            <p>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/policy_images_4.svg?1642756847417"
                alt=""
              />
              cam kết <span>100% chính hãng</span>
            </p>
          </div>
        </div>
      </div>
      <div className="detail-tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab="MÔ TẢ" key="1" className="detail-poli">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rem
            magnam laboriosam repellendus cum unde quibusdam inventore
            accusantium recusandae facilis, dolor ea eos officiis porro harum
            quisquam, molestias ab voluptatum est. Explicabo optio repellat
            suscipit cumque molestias, aliquid eveniet incidunt ea. Esse magnam
            odit eum quis saepe sit vel? Quis blanditiis quam cumque minus sed
            officia aliquam rerum suscipit maxime praesentium, deserunt dolore
            maiores dolorem sequi. Earum perspiciatis voluptatum laudantium
            vitae voluptatem soluta aut esse, consequatur officia aspernatur
            magni iste! Aspernatur sit pariatur iste velit aut, laboriosam
            voluptates molestias obcaecati. Aliquam voluptas maxime rerum
            eveniet esse pariatur perspiciatis, aspernatur nulla culpa quisquam
            provident incidunt eos itaque ipsum aut iusto? Vitae, explicabo.
            Odio dicta repellat aut perferendis rem. Id assumenda maxime,
            laboriosam nulla hic eaque autem necessitatibus aperiam atque modi
            est doloribus repudiandae obcaecati sequi labore provident libero,
            quae ipsa exercitationem cupiditate? Beatae est quia, deserunt illo
            debitis temporibus sunt illum expedita accusantium. Tempora iste
            esse est voluptatum ex, aliquam molestiae autem similique, ipsum hic
            eligendi ipsa reprehenderit totam exercitationem perferendis eos,
            quam atque quaerat culpa facilis quas non? Odio ex optio error sint
            qui aspernatur earum maiores eum, consectetur fuga, assumenda itaque
            voluptatem? Quae ex eveniet in ducimus iure necessitatibus?
          </TabPane>
          <TabPane tab="CHÍNH SÁCH ĐỔI TRẢ" key="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            consequuntur atque consectetur ex rerum commodi illo fuga beatae,
            inventore repudiandae blanditiis harum voluptatem modi magnam velit
            voluptas aperiam ipsam molestiae! Reprehenderit totam ducimus
            expedita ad voluptates. Pariatur quis asperiores vero optio.
            Inventore deleniti suscipit, molestias dignissimos voluptatibus ad
            similique, atque excepturi illum eligendi nihil praesentium porro
            doloribus animi architecto cumque voluptates nisi rem obcaecati
            pariatur nesciunt quas! Similique earum labore laborum nostrum ea
            accusamus neque quaerat dicta nisi ad? Impedit temporibus sunt
            dolore veniam autem! Labore at voluptatum eius unde, voluptatibus
            facilis optio fuga! Repudiandae libero voluptatem laboriosam saepe
            deserunt esse sequi et fugit ullam praesentium eveniet, delectus
            necessitatibus repellendus tempore ducimus obcaecati quas est dolor
            magni accusantium distinctio vero ex optio eligendi? Ratione
            consequuntur veniam vitae rem ea voluptas voluptate nulla harum
            minima placeat similique corporis impedit ipsa repellendus eum
            temporibus, alias dolore porro adipisci esse odio repellat numquam
            modi reiciendis? Eos ex illum reiciendis vitae explicabo ut,
            laboriosam consectetur nostrum iusto error corporis labore possimus
            architecto amet dolor unde reprehenderit magnam, recusandae aperiam
            at illo quasi corrupti pariatur. Iure delectus sunt, reprehenderit
            fugit quisquam asperiores quia error aut voluptatem sint unde
            possimus reiciendis labore! Illo nisi vero quis ullam consectetur
            iste ab reiciendis magnam corporis et aliquid modi hic earum vitae
            optio harum voluptatem blanditiis, voluptates quaerat itaque sunt!
            Dicta maiores sed aliquid at optio atque tenetur quisquam
            consequatur pariatur natus modi iure perferendis debitis, magni sit
            ad ut minima sapiente quo doloremque. Sed neque ut labore vero,
            magni accusamus? Temporibus accusantium illo, fugit debitis
            voluptatum veritatis velit vel quidem officiis quam quod! Quas
            accusantium tempore enim velit illo consequatur odio voluptas
            necessitatibus voluptate amet veritatis ducimus, accusamus
            blanditiis qui adipisci debitis impedit repellendus suscipit
            exercitationem eveniet quaerat culpa voluptatibus? Placeat numquam
            magni, delectus possimus quis omnis dolorem quae. Fuga repudiandae
            corrupti explicabo eveniet tenetur, magnam autem beatae accusamus
            perspiciatis mollitia, impedit maxime, est et officia? Ipsam autem
            ea iure aspernatur optio voluptate tempore laudantium libero qui
            facere. Alias doloribus distinctio illum. Error enim sequi nisi
            voluptate iure velit voluptatum minus fuga inventore. Placeat a eius
            veniam, qui voluptates veritatis cumque reiciendis consequatur, est
            necessitatibus totam, atque laudantium fuga! Possimus expedita,
            laudantium quidem enim veritatis eveniet, ab tenetur nesciunt
            accusamus repellendus iure ratione commodi consequuntur dolores
            harum facilis illum soluta debitis consequatur? Est error aliquid
            veritatis illo numquam placeat, sint quidem nulla dolores? Provident
            ipsum repellat beatae incidunt.
          </TabPane>
        </Tabs>
      </div>
      <div className="detail-related">
        <a href="#a">
          sản phẩm <span>liên quan</span>
        </a>
        <ProductList productList={relatedList} />
      </div>
    </div>
  );
}

export default Detail;
