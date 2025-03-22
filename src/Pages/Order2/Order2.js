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
      <Header />


    <div className='Title'>
      <h1>Giftbasket</h1>
      <p>Show how your sweet tooth is and share a gift basket with a friend or a loved one</p>
    </div>

      
    <div className="container">
      <div className="box">
        <img src={Basket1} alt="Image 1" />
        <div className="content">
          <h3>Basket 1</h3>
          <p>Description of Basket 1. Price: $10</p>
        </div>
      </div>
      <div className="box">
        <img src={Basket2} alt="Image 2" />
        <div className="content">
          <h3>Basket 2</h3>
          <p>Description of Basket 2. Price: $15</p>
        </div>
      </div>
      <div className="box">
        <img src={Basket3} alt="Image 3" />
        <div className="content">
          <h3>Basket 3</h3>
          <p>Description of Basket 3. Price: $20</p>
        </div>
      </div>
      <div className="box">
        <img src={Basket4} alt="Image 4" />
        <div className="content">
          <h3>Basket 4</h3>
          <p>Description of Basket 4. Price: $25</p>
        </div>
      </div>
    </div>
      <Footer />
      
      </>
    
  )
}

    <Footer />


export default Order2;
