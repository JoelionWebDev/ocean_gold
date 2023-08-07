import React from "react";
import "./services.css";
// import img from "../asset/value.jpg";
import img1 from "../asset/img18.png";
// import img2 from "../asset/img12.png";
// import img3 from "../asset/img13.png";
import img4 from "../asset/img14.png";
import img14 from "../asset/solid1.jpeg";
import img15 from "../asset/solid2.jpeg";
import img16 from "../asset/solid3.jpeg";
import img17 from "../asset/solid.mp4";
import img5 from "../asset/img15.png";
import img6 from "../asset/img16.png";
// import finace from "../asset/finance.png";
import chq1 from "../asset/cheque/ch1.png";
import img from "../asset/value.jpg";
// import chq2 from "../asset/cheque/ch2.png";
import chq3 from "../asset/cheque/ch3.png";
import chq4 from "../asset/cheque/ch4.png";
import chq8 from "../asset/cheque/ch8.png";
import chq9 from "../asset/cheque/ch9.png";
import chq6 from "../asset/cheque/ch6.png";
// import img7 from "../asset/img17.png";
import imgo from "../asset/imgoil.png";
import imgo1 from "../asset/imgoil1.png";
import Covers from "../home/services-hero";

const Services = () => {
  return (
    <div className="mainsection">
      <Covers />
      <section className="section">
        <div className="about">
          <h2>
            Ocean gold <span>investment LTD.</span>
          </h2>
          <h3>
            Services <span>Outline</span>
          </h3>
          <p>
            Ocean Gold Investment Company is a Nigerian based company with
            multifaceted services.
          </p>
          <ul>
            <li> Oil and Gas</li>
            <li> Solid Minerals</li>
            <li> Financial Marketing/Financial Trading/Bank Instrument.</li>
            <li> Travels and Tour.</li>
          </ul>
          {/* <p>
            This name was driven from an inspiration traceable to the gold in
            the ocean which rules major part of the global economy known as oil
            and gas.{" "}
          </p>
          <p>
            Meaning that one of our business dealing houses is Oil and Gas, we
            buy and sell every sector of oil and gas of both up/down streams
            (refined and crude) products.{" "}
          </p> */}
          {/* <img src="" alt="" /> */}
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
              buy and sell. We can efficiently supply any quantity of Export
              quality of Crude Oil OFF OPEC on both CIF, TTO, TTT, FOB and we
              can also facilitate bulk allocation from NNPC (Nigeria). We can
              reliably organize the sales of oil product to any West Africa
              water coast through the Nigerian authorized oil dealer the NNPC,
              Like Ghana waters, Lome waters, Cotonue Waters Etc.
            </p>
            <p>
              We also deal in Automobile Gas Oil (AGO) both for TTO, TTT and
              Tank Farm Delivery in any Tank Farm in Nigeria Lagos, PH, Warri
              Akwaibom etc. and any west African Tank farm, in Togo, Ghana,
              Cameroon etc. <br /> We both buy from the NNPC imported automobile
              Gas Oil (AGO) and also imports.
            </p>
            <h4>We deal with all other petroleum products,</h4>
            <ul>
              <li> AGO</li>
              <li> DPK</li>
              <li> PMS,</li>
              <li> Low Poor Fuel Oil (LPFO)</li>
              <li> Jet AI Aviation Oil (etc)</li>
              <li> Bitumen,</li>
            </ul>
            In a nutshell whatever product you need in oil/ petroleum product we
            are available to give you satisfactory service.
          </div>
        </section>
        <section className="finance">
          <h3>Financial Market Trading </h3>
          <p>
            Ocean Gold Investment limited is also into financial market trading
            as one of our major Enterprise.
            <br /> Our area of concentration in the financial market is Forex,
            Efex, Financial Instrument. (SBLC/LC inclusive) ;
          </p>
          <p>
            We trade on banking instruments, we both provide and also receive.
            Meaning that we issue and receive (monetize) any type of instrument
            both locally and in foreign transactions (currencies).
          </p>
          <div className="chimg">
            <div className="chi">
              <img src={chq1} width="50%" alt="null" />
              <img src={chq6} width="50%" alt="null" />
            </div>
            <div className="chi">
              <img src={chq3} width="50%" alt="null" />
              <img className="" src={chq4} width="50%" alt="null" />
            </div>
            <div className="chi">
              <img src={chq8} width="50%" alt="null" />
              <img className="" src={chq9} width="50%" alt="null" />
            </div>
          </div>
          <h3>Our Services</h3>
          <ul>
            <li> Bank Guarantee (BG)</li>
            <li>Block Fund (BF)</li>
            <li>Post No Debit (PND)</li>
            <li>Bank Draft</li>
            <li>Bank Endorsed Cheque (BEC)</li>
            <li>Letter of Credit (LC)</li>
            <li>Standby Letter of Credit (SBLC)</li>
          </ul>
          In a nutshell we deal in every aspect of financial trading, Bank
          instrument trading etc. as consultant.
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
          {/* <img src={img} width="100%" alt="" /> */}
          <div>
            {/* <h2>
              OUR<span>VALUE</span>
            </h2>
            <p>
              Ocean Gold investment LTD is a reputable company that has the face
              of integrity, and honest approach to business.
            </p>
            <p>
              We prefer to give you the required satisfaction that will in-turn
              give access to your wealth base of the service value. We strive to
              go above and beyond for our clients no matter the challenge. We
              aim to deliver our very best work every single day across our
              services.
            </p> */}
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
              different products. <br /> We supply solid minerals of all types
              at a good rate we have different kinds of solid mineral up to
              three hundred and more. Solid minerals with its different
              purposes. <br /> We will deliver to your warehouse in any part of
              Nigeria and can also export to your port of delivery in any part
              of the world.
            </p>
            <img src={img} width="100%" alt="" />
            <div className="minerals">
              <p>
                <span>
                  We have all this minerals available in Diffrent regions.
                </span>{" "}
                <br /> Aquo Marine, Dolomite, Silimonite, Barite, Bauxite,
                Betonite, Bismuth, Emeral, Fluoride, Ironore, Molybdenite,
                Phrochlore, Tantalite/Columbite, Tin, Wolfram, Lignite, Marble,
                Flakes, Granite, Laterite, Phosphate, Potash, Silica Sand,
                Lead/Zinc Soda Ash and Tintomite Cotton, Oil/Gas, Salt,
                Cassiterite, Dolomite, Gold, Tantalite, Bentonite, Dolomite,{" "}
              </p>

              <video
                className="solidhide position video"
                width="100%"
                src={img17}
                loop
                muted
              />
              <p>
                <span>Bitumen, Clay, Amethyst,</span> (Topaz Garnet), Barytex,
                Barite, Cassirite, Chalcopyrite, Coking Dolomite, Galena,
                Limestone, Mica, Salt, Sapphire, Talc, Tantalite, Tourmaline,
                Quartz, Zireon, Lead/Zinc and Talc Bitumen, . Bitumen,
                Dimension, Stone, Gemstone, Glass-Sand, Gypsium, Oil/Gas Talc,
                Tantalite and Tourmaline, Lignite, Cassiterite (tine ore),
                Gymsium, Walfram, Coal, Lignite, Iron-ore, Clay, Glay, Lignite,
                Maganess, Oil/Gas,
              </p>
              <img
                className="solidflex solidhide"
                src={img14}
                width="100%"
                alt="null"
              />
              <img
                className="solidflex solidhide"
                src={img15}
                width="100%"
                alt="null"
              />
              <p>
                <span>Barite, Lignite, Limestone,</span> Manganese, Salt,
                Butyles, Amethyst, Aqua Marine, Asbestos, Flosper, Graphite,
                Hyanite, Mica, Rock Crystal, Ruby, Sapphire, Sihnite,
                Superntinite, Tentaline, Topaz and Tourmaline. Gassiterite,
                Copper, Glass-sand, Lead/Zinc, Pyrochinre, Tantalite, Marble,
                Salt, Gold. Core, Dolomite, Kaolin, Marble, Talc and Tantalite.
                Cassiterite, Marble, Mica,Tantalite, Bentonite, Kaolin and
                Magnesite. Lignite, Clay, Glass-Sand, Tantalite.
              </p>
              <img className="solidhide" src={img16} width="100%" alt="null" />
            </div>
          </div>
        </div>
        <div className="about">
          <h3>Travels and Tour</h3>
          <div className="img">
            <img src={img1} width="50%" alt="null" />
            <img src={img6} width="50%" alt="null" />
          </div>
          <p>
            We organize travel and tours both locally and internationally.
            Within Nigeria, especially students excursion and tours to
            attractive locations in Eastern, Western and Northern Nigeria and
            international tourism such as pilgrims, in the Holy Land, of Israel,
            Turkey, Jordan, Greece, etc. We also assist our clients to secure
            travelling rights into different parts of the world.
          </p>
          <p className="email">oceangoldinv@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
