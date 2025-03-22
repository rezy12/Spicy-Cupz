
import "../Menu/menu.css"
import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Sweet1 from "../../components/Images/sweet1.png"
import Sweet2 from "../../components/Images/sweet2.png"
import Sweet3 from "../../components/Images/sweet3.png"
import Sweet4 from "../../components/Images/sweet4.png"
import Sweet5 from "../../components/Images/sweet5.png"
import Sweet6 from "../../components/Images/sweet6.png"
import Sweet7 from "../../components/Images/sweet7.png"
import Sweet8 from "../../components/Images/sweet8.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";




const Menu = () => {
  return (
    <>

      <Header />


      <div className='Title'>
        <h1>Sweet Section</h1>
        <p>Welcome to <div className="sidestream">SweetSide</div><Link to= "/menu"><a>Sour Side</a></Link></p>
     </div>

      
    <div className="container">
      <div className="box">
        <img src={Sweet1} alt="Image 1" />
        <div className="content">
          <h3>Strawberry Gummies</h3>
          <p>Sweet and juicy strawberry gummies bursting with fruity flavor. Price: $10</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet2} alt="Image 2" />
        <div className="content">
          <h3>Orange Gummies</h3>
          <p>Zesty orange gummies with a tangy burst of citrus flavor. Price: $15</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet3} alt="Image 3" />
        <div className="content">
          <h3>Blueberry  SweetTapes</h3>
          <p>Blueberry rolling tape gum with a sweet and tangy flavor twist. Price: $20</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet4} alt="Image 4" />
        <div className="content">
          <h3>Watermelon Jars</h3>
          <p>Juicy watermelon gummies with a refreshing burst of fruity sweetness. Price: $25</p>
        </div>
      </div>

      
    <div className="container">
      <div className="box">
        <img src={Sweet5} alt="Image 1" />
        <div className="content">
          <h3>Dino Gummies</h3>
          <p>Dinosaur-shaped gummies: a fun and fruity prehistoric treat for all ages. Price: $10</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet6} alt="Image 2" />
        <div className="content">
          <h3>Kiwi Gummies</h3> 
          <p>Sweet and tangy kiwi gummies with a vibrant, tropical flavor. Price: $15</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet7} alt="Image 3" />
        <div className="content">
          <h3>Sweet Hearts</h3>
          <p>Description of Basket 3. Price: $20</p>
        </div>
      </div>
      <div className="box">
        <img src={Sweet8} alt="Image 4" />
        <div className="content">
          <h3>Strawberry Gum Cubes</h3>
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
