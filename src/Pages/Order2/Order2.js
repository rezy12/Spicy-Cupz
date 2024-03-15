import React from 'react';
import "../Order2/Order2.css";
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const Order2 = () => {
  return (
<>
    <Header />
    <div className="order2-container">
      <h1>Choose Your Gift Basket</h1>
      <div className="gift-baskets">
        <div className="gift-basket">
          <h2>Classic Basket</h2>
          <p>A selection of our most popular candies</p>
          <p>Price: $25</p>
          <button>Add to Cart</button>
        </div>
        <div className="gift-basket">
          <h2>Deluxe Basket</h2>
          <p>A larger assortment of candies and chocolates</p>
          <p>Price: $35</p>
          <button>Add to Cart</button>
        </div>
        <div className="gift-basket">
          <h2>Premium Basket</h2>
          <p>A luxurious collection of gourmet sweets</p>
          <p>Price: $50</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <p className="note">Note: Custom baskets cost an additional $5.</p>
    </div>

    <Footer />

    </>
  );
};

export default Order2;
