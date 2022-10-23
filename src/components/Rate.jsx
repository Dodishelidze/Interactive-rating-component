import React from "react";

const Rate = ({ id, value, active, changeActiveButton }) => {
  return (
    <>
      <button
        id={id}
        className={active === true ? "active" : "deactive"}
        value={value}
        onClick={() => {
          changeActiveButton(id);
        }}
      >
        {value}
      </button>
    </>
  );
};

export default Rate;
