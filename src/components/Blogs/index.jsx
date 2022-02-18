import React from "react";
import { Link } from "react-router-dom";

import "./blogs.scss";

function Blogs() {
  return (
    <div className="blogs">
      <h2>
        clownz <span>new collection</span>
      </h2>
      <div className="blogs-list">
        <div className="blogs-item">
          <div className="blogs-media">
            <div className="blogs-thumb">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/untitled-session0936.jpg?v=1639477429930"
                alt=""
              />
            </div>
            <p className="blogs-title">
              CLOWNZ X RAP NHÀ LÀM | HOMEMADE RAPPER COLLECTION
            </p>
          </div>
          <p className="blogs-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            deserunt atque reiciendis voluptatum ex, deleniti esse recusandae
            blanditiis odio veritatis dicta hic autem eligendi! Nemo iste
            temporibus nostrum dolore deserunt!
          </p>
        </div>
        <div className="blogs-item">
          <div className="blogs-media">
            <div className="blogs-thumb">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/182621288-4026388387397132-8967378679853572507-n.jpeg?v=1639475863017"
                alt=""
              />
            </div>
            <p className="blogs-title">
              CLOWNZ X RAP NHÀ LÀM | HOMEMADE RAPPER COLLECTION
            </p>
          </div>
          <p className="blogs-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            deserunt atque reiciendis voluptatum ex, deleniti esse recusandae
            blanditiis odio veritatis dicta hic autem eligendi! Nemo iste
            temporibus nostrum dolore deserunt!
          </p>
        </div>
        <div className="blogs-item">
          <div className="blogs-media">
            <div className="blogs-thumb">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/16143680-1270573972978601-982335708478266790-o.jpg?v=1610967966857"
                alt=""
              />
            </div>
            <p className="blogs-title">
              CLOWNZ X RAP NHÀ LÀM | HOMEMADE RAPPER COLLECTION
            </p>
          </div>
          <p className="blogs-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            deserunt atque reiciendis voluptatum ex, deleniti esse recusandae
            blanditiis odio veritatis dicta hic autem eligendi! Nemo iste
            temporibus nostrum dolore deserunt!
          </p>
        </div>
      </div>
      <Link to="/magazine">xem tất cả</Link>
    </div>
  );
}

export default Blogs;
