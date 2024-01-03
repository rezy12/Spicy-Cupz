import React from 'react';
import "../Order/order.css";

const Order = () => {
  return (
    <>
      <div>
        <h3>Contact Me</h3>
      </div>


      <h3>Send Me An Email</h3>

      <form action="name-email-example@example.com" method="post">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required="" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email@example.com" required="" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter order here..." required=""></textarea>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Order;
