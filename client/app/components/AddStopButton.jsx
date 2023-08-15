import React from "react";
import AddIcon from "@mui/icons-material/Add";

const AddStopButton = ({ numberOfStops, setNumberOfStops, stop }) => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add Next Stop
      </label>
      <AddIcon
        variant="contained"
        style={{ fontSize: "35px" }}
        onClick={() => {
          
          setNumberOfStops(numberOfStops + 1);
        }}
      >
        
      </AddIcon>
    </div>
  );
};

export default AddStopButton;
