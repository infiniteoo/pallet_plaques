import React from "react";

const StopNumber = ({numberOfStops}) => {
  return (
    <>
      <label
        htmlFor="stopNumber"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {numberOfStops ? numberOfStops + "." : "1."}
      </label>
    </>
  );
};

export default StopNumber;
