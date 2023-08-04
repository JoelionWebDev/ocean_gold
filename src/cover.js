import React from "react";
import "./cover.css";
import Img from "./asset/pointer.png";

const Cover = () => {
  return (
    <React.Fragment>
      <main className="bg">
        <main className="bg hero">
          <div>
            <h1 className="name">Ocean Gold</h1>
            <h2 className="titleh2">Investment LTD.</h2>
          </div>
          <div className="cover">
            <h5>Have you heard of OCean Gold Investment LTD?</h5>
            <div className="line"></div>
            <div className="left">
              <p>
                This name was driven from an inspiration traceable to the gold
                in the ocean which rules major part of the global economy known
                as oil and gas.
              </p>{" "}
              <p>
                Meaning that one of our business dealing houses is Oil and Gas,{" "}
              </p>
              <h5>@ Ocean Gold Investment (LTD), we deal with the following</h5>
              <img src={Img} width="28%" alt="null"></img>
              <p>
                Location: Suite H-171 Road 3, Ikota Shopping Complex VGC Lekki
                Lagos
              </p>
              <p className="number">08037788716 or 08125838838</p>
            </div>
            <div className="right">
              <h3>• Oil and Gas</h3>
              <h3>• Solid Minerals</h3>
              <h3>• Financial Marketing</h3>
              <h3>• Travels and Tour.</h3>
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

export default Cover;
