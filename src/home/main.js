import React from "react";
import "./main.css";
import img from "../asset/value.png";
import img1 from "../asset/img18.png";
// import img2 from "../asset/img12.png";
// import img3 from "../asset/img13.png";
import img4 from "../asset/img14.png";
import img5 from "../asset/img15.png";
import img6 from "../asset/img16.png";
// import img7 from "../asset/img17.png";
import imgo from "../asset/imgoil.png";
import imgo1 from "../asset/imgoil1.png";
// import chq1 from "../asset/cheque/ch1.png";
// import chq2 from "../asset/cheque/ch2.png";
import chq3 from "../asset/cheque/ch3.png";
import chq4 from "../asset/cheque/ch4.png";
import chq8 from "../asset/cheque/ch8.png";
import chq9 from "../asset/cheque/ch9.png";
import ref from "../asset/ref21.png";
import tanta2 from "../asset/solidm1.jpeg";
import tanta1 from "../asset/solidm2.jpeg";

// import chq6 from "../asset/cheque/ch6.png";

const main = () => {
  return (
    <div className="mainsection">
      <div className="gradient" />
      <section className="section">
        <div className="about">
          <h2>
            Ocean gold <span>investment LTD.</span>
          </h2>
          <p>
            This name was driven from an inspiration traceable to the gold in
            the ocean which rules major part of the global economy known as oil
            and gas.{" "}
          </p>
          <p>
            Meaning that one of our business dealing is Oil and Gas, we buy and
            sell every sector of oil and gas of both up/down streams (refined
            and crude) products.{" "}
          </p>
          <div className="about">
            <h2>
              Services <span>Outline</span>
            </h2>
            <p>
              Ocean Gold Investment Company is a Nigerian based company with
              multifaceted services which are as follow.
            </p>
            <ul>
              <li>. Oil and Gas</li>
              <li>. Solid Minerals</li>
              <li>
                . Financial Marketing: Bank Instrument trading locally and
                internationally
              </li>
              <li>. Travels and Tour.</li>
            </ul>
          </div>

          <p className="email">oceangoldinv@gmail.com</p>
        </div>
        <section className="oilandgas">
          <h3>
            Oil and <span>Gas</span>
          </h3>
          <div className="img">
            <img src={imgo} width="50%" alt="null" />
            <img src={imgo1} width="50%" alt="null" />
          </div>
          <div>
            <p>
              We deal in Oil and Gas both up-streams and down-streams, we both
              buy and sell. We efficiently supply any quantity of Export quality
              of Crude Oil OFF OPEC on both CIF, TTO, TTT, FOB and we duly
              facilitate bulk allocation from NNPC (Nigeria). We reliably
              organize the sales of oil product to any West Africa water coast
              and any part of the world through the Nigerian authorized oil
              dealer the NNPC.
            </p>
          </div>
        </section>
        <div className="featured">
          <div className="img">
            {/* <img
              src="https://img.freepik.com/premium-photo/image-blue-ferry-sea-blue-sky-clouds-created-using-generative-ai-technology_772924-4338.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/fc/35/72/fc357254541c2886a4a8722cbfa9631e.png"
              width="100%"
              alt=""
            /> */}
          </div>
          <img src={img} width="100%" alt="" />
          <hr />
          <img className="ref" src={ref} width="100%" alt="" />
          <div>
            <h2>
              OUR<span>VALUE</span>
            </h2>
            <p>
              Ocean Gold investment LTD is a reputable company that has the face
              of integrity, and honest approach to business.
            </p>
            <p>
              We prefer to give you the required satisfaction that will in-turn
              give access to your wealth base due to our service value. We
              strive to go above and beyond for our clients no matter the
              challenges. We aim to deliver our very best, working every single
              day across our services to satisfy our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="featured">
          <h3>Solid Minerals</h3>
          <div className="img">
            <img src={img4} width="50%" alt="" />
            <img src={img5} width="50%" alt="" />
          </div>

          <h3>Tantalite Ore</h3>
          <div className="img">
            <img src={tanta1} width="50%" alt="" />
            <img src={tanta2} width="50%" alt="" />
          </div>

          <div>
            {" "}
            <p>
              A mineral is a naturally occurring substance that is solid and
              inorganic, representable by a chemical formula, usually abiogenic
              and has an ordered atomic structure.
            </p>
            <p>
              Ocean Gold Investment LTD is well rooted in solid minerals and is
              one of the firms mining and supplying solid mineral which has been
              identified as one of the world treasures and raw materials for
              different products.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="finance">
        <h3>Financial Market Trading </h3>
        <p>
          Ocean Gold Investment limited is also into financial market trading as
          one of its major Enterprice.
          <br /> Our area of concentration in the financial market is Forex;
        </p>
        <p>
          We trade on banking instruments, we both provide and also receive.
          Meaning that we issue and monetize any type of instrument both locally
          and in foreign currencies.
        </p>
        <div className="chimg">
          {/* <div className="chi">
            <img src={chq1} width="50%" alt="null" />
            <img src={chq6} width="50%" alt="null" />
          </div> */}
          <div className="chi">
            <img className="" src={chq9} width="50%" alt="null" />
            <img src={chq3} width="50%" alt="null" />
          </div>
          <div className="chi">
            <img src={chq8} width="50%" alt="null" />
            <img className="" src={chq4} width="50%" alt="null" />
          </div>
        </div>
        <p>
          . Bank Guarantee (BG) <br />. Block Fund (BF) <br /> . Post No Debit
          (PND) <br />
          . Draft Bank Endorsed Cheque (BEC) <br /> . Letter of Credit (LC){" "}
          <br />
          . Standby Letter of Credit (SBLC) <br />
          In a nutshell we deal in every aspect of financial trading, Bank
          instrument trading etc. as consultant.
        </p>

        <h3>Travels and Tour</h3>
        <div className="img">
          <img src={img1} width="50%" alt="null" />
          <img src={img6} width="50%" alt="null" />
        </div>
        <p className="email">oceangoldinv@gmail.com</p>
      </section>
    </div>
  );
};

export default main;
