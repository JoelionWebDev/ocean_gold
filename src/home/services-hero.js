import React from "react";
import "./services-hero.css";
import Img from "../asset/pointer.png";

const service_hero = () => {
  return (
    <React.Fragment>
      <main className="bg">
        <main className="bg hero">
          <div className="writeup">
            <h1 className="name">Our Services</h1>
            {/* <h2 className="titleh2">(Ocean Gold)</h2> */}
          </div>
          <div className="cover">
            <div className="line hide"></div>
            <div className="left">
              <h3>@ Ocean Gold Investment LTD.</h3>
              <img className="hide" src={Img} width="28%" alt="null"></img>
              <h4 className="hide address">
                Office: Suite H-171 Road 3, Ikota Shopping Complex VGC Lekki
                Lagos
              </h4>
              <p className="number hide">08037788716 or 08125838838</p>
            </div>
            <div className="right">
              <div className="service">
                {" "}
                <h4>• Oil and Gas</h4>
              </div>
              <div className="service">
                {" "}
                <h4>• Solid Minerals</h4>
              </div>
              <div className="service">
                <h4>• Financial Marketing</h4>
                <p>
                  . Bank instrument <br /> . Forex <br />. Efex
                </p>
              </div>
              <div className="service">
                <h4>• Travels and Tour.</h4>
              </div>
            </div>
          </div>

          {/* <div className="btn">
            <a
              target="_blank"
              href="https://trillionmagnet.github.io/form/index.html.html"
            >
              Get in touch
            </a>
          </div> */}
        </main>
      </main>
    </React.Fragment>
  );
};

export default service_hero;
