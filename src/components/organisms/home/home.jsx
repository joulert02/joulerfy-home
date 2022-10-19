import React from "react";
import "./home.scss";

const Home = () => {
  return (
      <section id="homeContainer">
        <section id="card">
          <ul>
            <li>
              <span></span>
              <strong>How may I help you, bro?</strong>
            </li>
            <li>
              <span></span>
              <strong>I don't know if I can be helped</strong>
            </li>
            <li>
              <span></span>
              <strong>That's deep. Let me help.</strong>
            </li>
          </ul>
        </section>

        <section id="primary">
          <h1>Your Personal Music APP</h1>
          <p>The best Aplication to listen music.</p>
          <a href="#homeContainer2">Get music already</a>
        </section>
      </section>
  );
};

export default Home;
