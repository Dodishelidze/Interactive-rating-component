import React from "react";
import Rate from "./Rate";

const Ratelist = ({ rates, changeActiveButton }) => {
  return (
    <div className="ratelist">
      {rates.map((rate) => (
        <Rate
          key={rate.id}
          value={rate.value}
          active={rate.active}
          changeActiveButton={changeActiveButton}
          id={rate.id}
        />
      ))}
    </div>
  );
};

export default Ratelist;
