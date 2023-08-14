import React from "react";



const SubmitButton = ({definedStops}) => {

    const handleSubmit = () => {
        console.log("Submit button clicked");
    }




  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5" onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default SubmitButton;
