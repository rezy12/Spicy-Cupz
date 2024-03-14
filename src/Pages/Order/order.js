import React from 'react';
import "../Order/order.css";
import Header from "../../components/Header/header";
import Footer from '../../components/Footer/footer';

const Order = () => {
  return (
    <>
      <Header />

      <div className="form-container">
        <div class="headerTitle">
          <h3>Contact Me</h3>
          <h3>Send Me An Email</h3>
        </div>

        <div className="form-box">
          <form action="name-email-example@example.com" method="post">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required="" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" required="" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Enter order here..." required=""></textarea>
            </div>

            <button type="button" value="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Order;
