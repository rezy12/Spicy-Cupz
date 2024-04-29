
import "../Menu/menu.css"
import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SpicyFlower from "../../components/Images/flowers.jpeg";
import ChamoyCups from "../../components/Images/midcup.png";
import DryDustedGummies from "../../components/Images/spiceballs.png";
import MiniSweetCups from "../../components/Images/stack-cup.png";
import SpicyPop from "../../components/Images/two-cup.jpg";
import { NavLink } from "react-router-dom";




const Menu = () => {
  return (
    <>

      <Header />

      <div class="titlePage">
        <h1>Spicy Section</h1>
        <h6>Checkout Sweet section</h6>
        <p>Welcome to Spicy Cupz, where bold flavors meet the thrill of heat! Our menu is a paradise for spice enthusiasts, offering a diverse selection of fiery candies that will tantalize your taste buds.</p>
        <p>Explore our range of handpicked spicy delights, available in various sizes to suit every craving. From sweet and tangy to intense heat, each candy is crafted to perfection, ensuring a unique and unforgettable experience with every bite.</p>
        <p>Dive into our menu and embark on a journey through the exciting world of spicy candy. Whether you're a seasoned spice lover or looking to spice up your taste buds, Spicy Cupz has something for everyone!</p>
      </div>

      
    <div className="container">
      <div className="box">
        <img src="image1.jpg" alt="Image 1" />
        <div className="content">
          <h3>Basket 1</h3>
          <p>Description of Basket 1. Price: $10</p>
        </div>
      </div>
      <div className="box">
        <img src="image2.jpg" alt="Image 2" />
        <div className="content">
          <h3>Basket 2</h3>
          <p>Description of Basket 2. Price: $15</p>
        </div>
      </div>
      <div className="box">
        <img src="image3.jpg" alt="Image 3" />
        <div className="content">
          <h3>Basket 3</h3>
          <p>Description of Basket 3. Price: $20</p>
        </div>
      </div>
      <div className="box">
        <img src="image4.jpg" alt="Image 4" />
        <div className="content">
          <h3>Basket 4</h3>
          <p>Description of Basket 4. Price: $25</p>
        </div>
      </div>

      
    <div className="container">
      <div className="box">
        <img src="image1.jpg" alt="Image 1" />
        <div className="content">
          <h3>Basket 1</h3>
          <p>Description of Basket 1. Price: $10</p>
        </div>
      </div>
      <div className="box">
        <img src="image2.jpg" alt="Image 2" />
        <div className="content">
          <h3>Basket 2</h3>
          <p>Description of Basket 2. Price: $15</p>
        </div>
      </div>
      <div className="box">
        <img src="image3.jpg" alt="Image 3" />
        <div className="content">
          <h3>Basket 3</h3>
          <p>Description of Basket 3. Price: $20</p>
        </div>
      </div>
      <div className="box">
        <img src="image4.jpg" alt="Image 4" />
        <div className="content">
          <h3>Basket 4</h3>
          <p>Description of Basket 4. Price: $25</p>
        </div>
      </div>
    </div>
    </div>

      <Footer />

    </>
  )
}

export default Menu
