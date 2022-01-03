import React, { useState } from "react";
import Timer from './Timer';

function App() {
  const [ isHidden, setIsHidden ] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
    <h1>React Timer</h1>
    <button onClick={() => setIsHidden(!isHidden)}>
      {!isHidden ? 'Show' : 'Hide'}
    </button>
    {isHidden && <Timer />}
  </div>
  );
}

export default App;
