import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="flex">
        <div className="footer-right">
          <h3 className="reg">RC. 1906161</h3>
          <h2>Ocean Gold Investment LTD</h2>
          <p>We are always ready and excited to work with you.</p>
          <ul>
            <li>Suite H-171 Road 3,</li>
            <li>Ikota Shopping Complex</li>
            <li>VGC Lekki Lagos.</li>
          </ul>
          <h4>oceangoldinv@gmail.com</h4>
          <h4>08037788716 / 08125838838</h4>
        </div>
        <div className="footer-left">
          <h4>
            {" "}
            We strive to go above and beyond for our clients no matter the
            challenges. We aim to deliver our very best, working every single
            day across our services to satisfy our clients.
          </h4>
        </div>
      </div>
      <hr />
      <div className="flex">
        <p>&copy; Ocean Gold Investment LTD.</p>
        <div className="flexicons">
          <a
            className="icon"
            href="https://www.facebook.com/profile.php?id=100095275488556"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a className="icon" href="https://www.instagram.com/oceangoldinv/">
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* <a className="icon" href="">
            <i className="fa-brands fa-linkedin"></i>
          </a> */}

          <a className="icon" href="https://twitter.com/oceangoldinv">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
