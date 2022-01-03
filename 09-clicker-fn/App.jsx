import React, { useState } from "react";

function App() {
  const [ count, setCount ] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ padding: "0 5px" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
  );
}

export default App;
