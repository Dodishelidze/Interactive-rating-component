import React from "react";

import { ReactComponent as ThanksSvg } from "../images/illustration-thank-you.svg";

const ThankYou = ({ choosen }) => {
  return (
    <div>
      <ThanksSvg style={{ marginTop: "45.79px", marginLeft: "121px" }} />
      <div className="rateResult">
        <p>You selected {choosen} out of 5</p>
      </div>

      <h1 className="ty">Thank You!</h1>
      <p className="tyText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
