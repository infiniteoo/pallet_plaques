import React from "react";

const SubmitButton = ({ definedStops }) => {
  const handleSubmit = () => {
    console.log("Submit button clicked");

    // iterate through definedStops array and send an axios request for each stop to the server on port 8000

    axios
      .post("http://localhost:8000/api/stops", {
        storeName: storeName,
        numberOfPallets: numberOfPallets,
        orderNumber: orderNumber,
        stopNumber: stopNumber,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5"
      onClick={handleSubmit}
    >
      Generate PDF
    </button>
  );
};

export default SubmitButton;
