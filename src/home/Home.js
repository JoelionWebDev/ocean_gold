import React from "react";
import Hero from "./hero";
import Accordian from "./Accordian";
import Main from "./main";
// import Footer from "./footer";

const Home = () => {
  return (
    <React.Fragment>
      <main style={{ color: "gray" }}>
        <div className="heroContainer">
          <Hero />
        </div>

        <div>
          <Main />
        </div>
        <div>
          <Accordian />
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </main>
    </React.Fragment>
  );
};

export default Home;
