import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    localStorage.setItem("counter", counterValue + 1);
    setCounterValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    localStorage.setItem("counter", counterValue - 1);
    setCounterValue((prev) => prev - 1);
  };

  const handleReset = () => {
    localStorage.setItem("counter", 0);
    setCounterValue(0);
  };

  useEffect(() => {
    let value = localStorage.getItem("counter");
    if (value) {
      setCounterValue(Number(value));
    }
  }, []);
  return (
    <div>
      <h3>Count : {counterValue}</h3>
      <br />
     <div className="btn">
     <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
     </div>
    </div>
  );
};

export default Counter;