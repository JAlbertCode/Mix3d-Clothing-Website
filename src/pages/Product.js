import React from 'react';
import { Rate } from 'antd';
import "./Product.css";
import Header from '../components/Header';
import { useLocation } from 'react-router';
import Purchase from '../components/Purchase';
const Product = () => {
  
  let {state: book} = useLocation();
  console.log(book);
  return (
  <>
  <div className="container">
    <Header />
    <div className="product-content">
      <div className="product-details">
        <h1 style={{ color: "white"}}>{book.name}</h1>
        <Rate value={book.rating} disabled={true}></Rate>
        <hr></hr>
        <p>
          Price:
          <span className="price"> ${book.price}</span>
        </p>
        <p>
          No Import Fees & Free Shipping Included
        </p>
        <hr></hr>
        <h3 style={{ color: "white"}}>About This Item</h3>
        <p>
          {book.about}
        </p>
      </div>
      <div>
        <div className="product-img">
          <iframe src="https://app.vectary.com/p/50xjzGVJsJVDrlJXAIw9xh" frameborder="0" width="100%" height="480"></iframe>,
          {/* <img src={book.image} alt="product" width="100%"></img> */}
          {/* <iframe src={book.image} width="100%"></iframe> */}
        </div>
        <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
      </div>
      <div className="purchase-details">
      <Purchase book={book}/>
      </div>
    </div>
  </div>
  </>
)
}

export default Product;
