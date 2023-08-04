import Accordion from "react-bootstrap/Accordion";
import "./accordian.css";
import "./main.css";

import React from "react";

const Accordian = () => {
  return (
    <main className="mainsection accordian">
      <div className="questions">
        <h3>freequently asked questions</h3>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is your office address?</Accordion.Header>
          <Accordion.Body>
            Our office head quarter is located at: Suite H-171 Road 3, Ikota
            Shopping Complex VGC Lekki Lagos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the summary of the services you offer?
          </Accordion.Header>
          <Accordion.Body>
            Ocean Gold Investment Company is a Nigerian based company with
            multifaceted services.
            <ul>
              <li>Oil and Gas</li>
              <li>Solid Minerals </li>
              <li>Financial Marketing:- Financial Trading/Bank Instrument.</li>
              <li>Travels and Tour.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the area of your specialization in the financial market
            trading?
          </Accordion.Header>
          <Accordion.Body>
            Our area of concentration in the financial market is Forex;
            <p>
              We trade on banking instruments, we both provide and also receive.
              Meaning that we issue and monetize any type of instrument both
              locally and in foreign currencies.
            </p>
            <p>
              Bank Guarantee (BG) <br /> Block Fund (BF) <br /> Post No Debit
              (PND) <br />
              Draft Bank Endorsed Cheque (BEC) <br /> Letter of Credit (LC){" "}
              <br />
              Standby Letter of Credit (SBLC) <br />
              In a nutshell we deal in every aspect of financial trading, Bank
              instrument trading etc. as consultant.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What type of solid minerals do you offer?
          </Accordion.Header>
          <Accordion.Body>
            We supply solid minerals of all types at a good rate we have
            different kinds of solid mineral up to three hundred and more. Solid
            minerals with its different purposes. We will deliver to your
            warehouse in any part of Nigeria and can also export to your port of
            delivery in any part of the world.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Are you into up and down stream of Oil and Gas?
          </Accordion.Header>
          <Accordion.Body>
            <h3>Yes</h3>
            We deal in Oil and Gas both up-streams and down-streams, we both buy
            and sell. We can efficiently supply any quantity of Export quality
            of Crude Oil OFF OPEC on both CIF, TTO, TTT, FOB and we can also
            facilitate bulk allocation from NNPC (Nigeria).
            <p>Contact for more details: oceangoldinv@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  );
};

export default Accordian;
