import React from 'react';
import "../Homepage/homepage.css";
import Header from "../../components/Header/header";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Smile from "../../components/Images/smile.PNG";
import Flower from "../../components/Images/flowers.jpeg";
import Img1 from "../../components/Images/img1.png";
import Img2 from "../../components/Images/img2.png";
import Img3 from "../../components/Images/img3.png";
import Footer from "../../components/Footer/footer";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };


  return (
    <>

      <Header />

      <section>

        <div>
          <h1 className="headerQutoe"><strong>Begin With A   Spicy Kick</strong></h1>
          <h1 className="headerQutoe"><strong>End   With   A   Sweet Smile </strong></h1>
        </div>

      </section>


      <div className="centered-container">
        <img className='smileImg' src={Smile} />
      </div>


      <section class="section-container">



        <div className="carousel-container">
          <Slider>
            <div>
              <img src={Img1} alt="Slide 1" />
              <p>Image 1: Blah blah blah</p>
            </div>
            <div>
              <img src={Img2} alt="Slide 2" />
              <p>Image 2: Blah blah blah</p>
            </div>
            <div>
              <img src={Img3} alt="Slide 3" />
              <p>Image 3: Blah blah blah</p>
            </div>
          </Slider>
          <button className="slick-prev">Previous</button>
          <button className="slick-next">Next</button>
        </div>


        <div className="discount-container">
          <h2>Get A Discount</h2>
          <p>
            Love our products and want to share them with the world? We'd love to see it! If you post about your order on Snapchat or Instagram, simply tag us in your post and we'll give you 50 cents off your next order as a thank you. It's our way of saying thank you for sharing the love and helping us spread the word about our products. So go ahead and get creative - we can't wait to see what you come up with
          </p>
          <button>Our Social Media</button>
        </div>

      </section>



      <section>
        <div class="combined-section">
          <section class="intro-par">
            <h1><sup><strong>Learn More About The Product</strong></sup></h1>
            <p>Indulge in the initial burst of spiciness and experience the initial blast of spicy flavor followed by the satisfying sweetness. Enjoy the variety of flavors that dance across your taste buds, savor the watery flavor that will leave you craving for more.</p>
            <button>Learn More</button>
          </section>

          <div class="image-container">
            <img src="" alt="" />
            <div class="text-container">
              <h3>Dry Dusted Lucas Cups</h3>
              <h3>Discover the World in Style with Spice</h3>
              <p>Savor the spicy flavor while on-the-move, conveniently packaged in two sizes. Choose from 5.5oz or 9.0oz options. Make the most of every moment with a tasty and portable option.</p>
              <button>Order Now</button>
            </div>
          </div>
        </div>

      </section>



      <Footer />

    </>







  );
}

export default Homepage;
