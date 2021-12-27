import React from "react";

const TestFunc = (props) => {
    const { title, data } = props;
  
    return (
      <div>
        <h2>{title}</h2>
        <p>
          <b>Param2: </b>
          {data}
        </p>
      </div>
    );
  };

  export { TestFunc };