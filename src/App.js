import React, { useState, useEffect, Fragment } from "react";
import "./style.css";
import "./button.css";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return [...array];
}

function sort(array) {
  return [...array.sort()];
}

export default function App() {
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
