import React, { Fragment } from "react";
import { Helpers } from "./Helpers";
import "./Pyramid.css";

export default function Pyramid(props) {
  const { moneyPyramid, questionNumber } = props;

  return (
    <div className="pyramids">
      <Helpers />
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              key={m.id}
              className={
                questionNumber === m.id
                  ? "moneyListItem active "
                  : "moneyListItem "
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
