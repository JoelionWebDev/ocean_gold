import React from "react";
import "./About.css";
import gold from "../asset/gold2.png";
import ceo from "../asset/chuks.jpeg";

const About = () => {
  return (
    <main className="about_container">
      <div className="about_hero">
        <h1 className="about_h1">About Us</h1>
        <p>(OCEAN GOLD)</p>
      </div>
      <h3>
        We’re a highly collaborative and supportive team, coming together on
        every project to ensure our clients get the very best of result.
      </h3>
      <div className="ceo">
        <img src={ceo} alt="missing picure" />
        <h4>Dr Chuks Onyechimereze c.</h4>
        <p>CEO</p>
      </div>
      <div className="img">
        <img src={gold} alt="missing picure" />
      </div>

      <section className="mv">
        <div>
          <h3>Our Mission</h3>
          <p>
            Building a foresighted bussiness initiative to attract like minds as
            bussiness partners/clients, enforcing integrity in our business
            world, to spread the common wealth of God.
          </p>
        </div>
        <div>
          <h3>Our value</h3>
          <p>
            We strive to go above and beyond for our clients no matter the
            challenges. We aim to deliver our very best, working every single
            day across our services to satisfy our clients.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
