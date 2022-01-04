import React, { useEffect, useReducer } from "react";


const countReducer = (state, { type } ) => {
  if (type === 'START') {
    return {
      ...state,
      isCounting: true
    }
  }

  if (type === 'STOP') {
    return {
      ...state,
      isCounting: false
    }
  }

  if (type === 'RESET') {
    return {
      count: 0,
      isCounting: false
    }
  }

  if (type === 'TICK') {
    return {
      ...state,
      count: state.count + 1
    }
  }
};

function getDefaultValue() {
  const userTimerValue = localStorage.getItem("timerValue");
  return userTimerValue ? +userTimerValue : 0;
}

export default function Timer() {
  const [ { count, isCounting }, dispatch ] = useReducer(countReducer, { count: getDefaultValue(), isCounting: false });

  useEffect(() => {
    localStorage.setItem("timerValue", count);
  }, [count]);

  useEffect(() => {
    let timerId = null;
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }

    return () => {
      timerId && clearInterval(timerId);
      timerId = null;
    }
  }, [isCounting]);

  return (
    <div>
      <h2>{count}</h2>
      {isCounting ? (
        <button style={{ margin: "2px" }} onClick={() => dispatch({ type: 'STOP' })}>
          Stop
        </button>
      ) : (
        <button style={{ margin: "2px" }} onClick={() => dispatch({ type: 'START' })}>
          Start
        </button>
      )}
      <button style={{ margin: "2px" }} onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}
