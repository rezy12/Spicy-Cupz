import React from 'react';
import Header from "../../components/Header/header";
import Footer from '../../components/Footer/footer';
import Spicy1 from "../../components/Images/spicy1.png";
import Spicy2 from "../../components/Images/spicy2.png";
import Spicy3 from "../../components/Images/spicy3.png";
import Spicy4 from "../../components/Images/spicy4.png";
import Spicy5 from "../../components/Images/spicy5.png";
import Spicy6 from "../../components/Images/spicy6.png";
import Spicy7 from "../../components/Images/spicy7.png";
import Spicy8 from "../../components/Images/spicy8.png";
import { Link } from "react-router-dom";
import "../Menu/menu.css"



const menu2 = () => {
  return (
    <>
    

    
    <Header />

    <div className='Title'>
        <h1>Spicy Section</h1>
        <p>Welcome to <div className="sidestream">Spicy</div><Link to= "/menu"><a>Sweet Side</a></Link></p>
     </div>


<div className="container">
<div className="box">
  <img src={Spicy1} alt="Image 1" />
  <div className="content">
    <h3>Spicy Rings </h3>
    <p>Spicy candy rings with a bold burst of fiery flavor. 1. Price: $10</p>
  </div>
</div>
<div className="box">
  <img src={Spicy2} alt="Image 2" />
  <div className="content">
    <h3>Pulparindo</h3>
    <p>This Mexican candy mixes spicy, sweet, and sour for a unique taste. Price: $15</p>
  </div>
</div>
<div className="box">
  <img src={Spicy3}  alt="Image 3" />
  <div className="content">
    <h3>Cinomen Puff Balls</h3>
    <p>Chili-coated tamarind starch gum: a spicy-sweet sensation Price: $20</p>
  </div>
</div>
<div className="box">
  <img src={Spicy4} alt="Image 4" />
  <div className="content">
    <h3>Spicy Gummy Worms</h3>
    <p>Chamoy Gummy Worms combine sweet, sour, and chili spice for a thrilling flavor burst, perfect for lively parties and fiestas. Price: $25</p>
  </div>
</div>


<div className="container">
<div className="box">
  <img src={Spicy5} alt="Image 5" />
  <div className="content">
    <h3>Spicy Gummy Bears</h3>
    <p>Description of Basket 1. Price: $10</p>
  </div>
</div>
<div className="box">
  <img src={Spicy6} alt="Image 6" />
  <div className="content">
    <h3>Fire Ball</h3>
    <p>Description of Basket 2. Price: $15</p>
  </div>
</div>
<div className="box">
  <img src={Spicy7}  alt="Image 7" />
  <div className="content">
    <h3>Swirl Hot Pots</h3>
    <p>Description of Basket 3. Price: $20</p>
  </div>
</div>
<div className="box">
  <img src={Spicy8} alt="Image 8" />
  <div className="content">
    <h3>Mint Spicy Bars</h3>
    <p>Description of Basket 4. Price: $25</p>
  </div>
</div>
</div>
</div>

<Footer />

    


    <Footer />
    </>
  )
}

export default menu2
