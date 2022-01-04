import React, { useEffect, useReducer } from "react";


const countReducer = (state, { type } ) => {
  switch (type) {
    case 'START':
      return {
        ...state,
        isCounting: true
      }
    case 'STOP':
      return {
        ...state,
        isCounting: false
      }
    case 'RESET':
      return {
        count: 0,
        isCounting: false
      }
    case 'TICK':
      return {
        ...state,
        count: state.count + 1
      }
  }

  return state;
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
