import React, { useState, Fragment } from "react";
import { shuffle, sort } from "./utils";
import APP_LOCALE from './constants';
import "./style.css";
import "./button.css";

const  App = () => {
  const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [ numbers, setNumbers ] = useState(initialState);
  const { TITLE, SHUFFLE, SORT } = APP_LOCALE;
  const elements = numbers.map((num, i) => {
    return <div className={`box val-${i + 1}`}>{num}</div>;
  });
  return (
    <Fragment>
      <h1 className="center header">{TITLE}</h1>
      <div className="wrapper">
        <div className="app">{elements}</div>
        <div className="controls">
          <button onClick={() => setNumbers(shuffle(numbers))}>{SHUFFLE}</button>
          <button onClick={() => setNumbers(sort(numbers))}>{SORT}</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
