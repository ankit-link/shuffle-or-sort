import React, { useState, useEffect, Fragment } from "react";
import { shuffle, sort } from "./utils";
import "./style.css";
import "./button.css";

const  App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [values, setValues] = useState(numbers);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <Fragment>
      <h1 className="center header">Shuffle and Sort</h1>
      <div className="wrapper">
        <div className="app">
          {values.map((val, i) => {
            return <div className={`box val-${i + 1}`}>{val}</div>;
          })}
        </div>
        <div className="controls">
          <button onClick={() => setValues(shuffle(values))}>shuffle</button>
          <button onClick={() => setValues(sort(values))}>sort</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
