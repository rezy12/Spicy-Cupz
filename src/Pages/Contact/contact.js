import React from 'react'
import "../Contact/contact.css"
import Header from "../../components/Header/header";
import Email from "../../components/Images/emailimg.png";
import Instag from "../../components/Images/insta.png";
import Snap from "../../components/Images/snap-imgg.png";
import Footer from '../../components/Footer/footer';

const contact = () => {
  return (


    <>

      <Header />

      <div class="intro-cap">
        <h1>Contact Me</h1>

        <table cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td>

                <h3>We understand that not all of our users have social media accounts. If you don't have a social media account or simply prefer not to use it, don't worry! We would still love to hear from you. Please feel free to send us an email below</h3>

              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <div class="diagonal-layout">
  <div class="img-container">
    <a href="https://www.instagram.com/spicycupz/" title="Instagram" target="_blank">
      <img src={Instag} alt="Instagram" title="Instagram" />
    </a>
    <div class="description">
      <h3>Instagram</h3>
      <p>Explore the vibrant world of Spicy Cupz on Instagram! </p>
    <p>Indulge your senses by browsing our mouthwatering menu showcased with captivating images. Join our community and witness the culinary journey that has delighted countless customers.</p>
    <p>Follow us for the latest updates, behind-the-scenes glimpses, and exclusive promotions. Our Instagram page is a visual feast that brings the Spicy Cupz experience to life. Don't miss out on the spice-filled adventure!</p>
    </div>
  </div>

  <div class="img-container">
    <a id="sendEmailButton" title="Email" target="_blank">
      <img src={Email} alt="Email" title="Email" />
    </a>
    <div class="description">
      <h3>Email</h3>
      <p>Have questions, suggestions, or something you want us to review? Feel free to reach out to us via email!</p>
    <p>At Spicy Cupz, we value your feedback and would love to hear from you. Whether you're curious about our menu, have ideas to share, or want us to explore a particular topic, your input matters.</p>
    <p>Simply drop us an email, and our team will get back to you as soon as possible. Your thoughts contribute to making Spicy Cupz an even better experience for our valued customers. We appreciate your engagement and look forward to hearing from you!</p>
    </div>
  </div>

  <div class="img-container">
    <img src={Snap} alt="Snap-chat" title="SnapChat" />
    <div class="description">
      <h3>SnapChat</h3>
      <p>Follow us on Snapchat for a behind-the-scenes look at Spicy Cupz! Dive into our daily stories showcasing the vibrant world of spicey candies, exclusive promotions, and exciting updates.</p>
    <p>Experience the thrill of exploring our diverse candy selection, and stay tuned for special offers available only to our Snapchat community. If you crave spicy treats and want to be the first to know about new arrivals, Snapchat is the place to be!</p>
    <p>Don't miss out on the fun – join us on Snapchat today and satisfy your spicey candy cravings!</p>
  </div>
  </div>
</div>

<Footer />

    </>
  )
}

export default contact
