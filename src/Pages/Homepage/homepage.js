import React from 'react';
import "../Homepage/homepage.css";
import Header from "../../components/Header/header";
import Flower from "../../components/Images/flowers.jpeg";
import Footer from "../../components/Footer/footer";

const Homepage = () => {
  return (
    <>

      <Header />

      <section>

        <div>
          <h1 className="headerQutoe"><strong>Begin<br />With<br />A <br /> Spicy Kick</strong></h1>
          <h1 className="headerQutoe"><strong>End <br /> With <br /> A <br /> Sweet Smile<br /></strong></h1>
        </div>

      </section>

      <section class="intro-par">

        <h1><sup><strong>Learn More About The Product</strong></sup></h1>
        <p>Indulge in the initial burst of spiciness and experience the initial blast of spicy flavor followed by the satisfying sweetness Enjoy the variety of flavors that dance across your taste buds, savor the watery flavor that will leave you craving for more.</p>
        <button>Learn More</button>

      </section>

      <section class="section-container">

        <div class="image-container">
          <img src={Flower} />
          <div class="text-container">

            <h3><strong>Special Someone</strong></h3>
            <p>Demonstrate your affection to the special person in your life express your love, whether it be on a special occasion or just make the effort to show that you care.
              Let your actions speak louder than words and show how much you truly love them.</p>
            <button>Order Now</button>


          </div>

        </div>

        <div class="image-container">

          <img src="" alt="" />
          <div class="text-container">
            <h3>Dry Dusted Lucas Cups</h3>
            <h3>Discover the World in Style with Spice</h3>
            <p>Savor the spicy flavor while on-the-move, conveniently packaged in two sizes.
              Choose from 5.5oz or 9.0oz options.
              Make the most of every moment with a tasty and portable option. </p>
            <button>Order Now</button>

          </div>

        </div>




        <h2>Get A Discount</h2>
        <p>Love our products and want to share them with the world? We'd love to see it! If you post about your order on Snapchat or Instagram, simply tag us in your post and we'll give you 50 cents off your next order as a thank you. It's our way of saying thank you for sharing the love and helping us spread the word about our products. So go ahead and get creative - we can't wait to see what you come up with</p>
        <button>Our Social Media</button>




      </section>


      {"<Footer/>"}

    </>







  );
}

export default Homepage;
