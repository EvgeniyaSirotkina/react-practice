import React, { useState, useEffect, useRef } from "react";

function getDefaultValue() {
  const userTimerValue = localStorage.getItem("timerValue");
  return userTimerValue ? +userTimerValue : 0;
}

export default function Timer() {
  const [ count, setCount ] = useState(getDefaultValue());
  const [ isCounting, setIsCounting ] = useState(false);
  const timerIdRef = useRef(null);

  const handleStop = () => {
    setIsCounting(false);
  }

  const handleStart = () => {
    setIsCounting(true);
  }

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  }
  
  useEffect(() => {
    localStorage.setItem("timerValue", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, [isCounting]);

  return (
    <div>
      <h2>{count}</h2>
      {isCounting ? (
        <button style={{ margin: "2px" }} onClick={handleStop}>
          Stop
        </button>
      ) : (
        <button style={{ margin: "2px" }} onClick={handleStart}>
          Start
        </button>
      )}
      <button style={{ margin: "2px" }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
