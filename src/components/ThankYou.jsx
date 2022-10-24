import React from "react";

import ThankSvg from "./ThankSvg";

const ThankYou = ({ choosen }) => {
  return (
    <>
      <ThankSvg />
      <div className="rateResult">
        <p className="selectedBtn">You selected {choosen} out of 5</p>
      </div>

      <h1 className="ty">Thank You!</h1>
      <p className="tyText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default ThankYou;
