"use client";

import CompleteStopGroup from "./components/CompleteStopGroup.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [numberOfStops, setNumberOfStops] = useState(1);
  const [definedStops, setDefinedStops] = useState([{
    stopNumber: 1,
    storeName: "",
    numberOfPallets: 0,
    orderNumber: "",

    


  }]);

  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= numberOfStops; i++) {
      // Generate a new stop object for each stop number
      const newStop = {
        stopNumber: i,
        storeName: "",
        numberOfPallets: 0,
        orderNumber: "",
      };
      temp.push(newStop);
    }
    setDefinedStops(temp);
  }, [numberOfStops]);

  useEffect(() => {
    console.log("definedStops after update", definedStops);
    console.log("numberOfStops after update", numberOfStops)
  }, [definedStops]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        {/* Map each stop to a new row */}
        {definedStops.map((stop) => (
          <div
            key={stop}
            className="flex flex-row items-center justify-between w-full"
          >
            <CompleteStopGroup
              stop={stop}
              numberOfStops={numberOfStops}
              setNumberOfStops={setNumberOfStops}
              definedStops={definedStops}
              setDefinedStops={setDefinedStops}
            />
          </div>
        ))}
        <SubmitButton definedStops={definedStops} />
      </div>
    </main>
  );
}
