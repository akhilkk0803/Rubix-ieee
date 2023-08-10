import React, { useState } from "react";
import "./JoinUS.css";
function NewsletterSubscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: Name=${name}, Email=${email}`);
    alert("Letters will be sent to ur email");
    // Send the name and email to the server for subscription processing
    // You can use fetch or axios to make a POST request to a server endpoint
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label className="newsletter-label">
          <h3 className="label-class">Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="newsletter-input"
          />
        </label>
        <br />
        <label className="newsletter-label">
          <h3 className="label-class">Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
          />
        </label>
        <br />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscription;
