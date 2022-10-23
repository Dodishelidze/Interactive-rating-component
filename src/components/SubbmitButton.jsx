import React from "react";
import { Link } from "react-router-dom";

const SubbmitButton = ({ choosen, resetChoosen }) => {
  return (
    <div className="submit">
      <Link to={choosen == 0 ? "#" : "thanks"} onClick={resetChoosen}>
        <button className="submitbutton">SUBMIT</button>
      </Link>
    </div>
  );
};

export default SubbmitButton;
