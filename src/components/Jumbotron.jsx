import React from "react";
import Iphone14 from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handelLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone14} alt="iphone14 phptp" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        {" "}
        From $41.62 for 24 mo. or $999 before trade-in.
      </span>

      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handelLearnMore}>
            Learn more
          </a>
        </li>
      </ul>

      <img className="iphone-img" src={HoldingIphone} alt="Holding Iphone" />
    </div>
  );
}

export default Jumbotron;
