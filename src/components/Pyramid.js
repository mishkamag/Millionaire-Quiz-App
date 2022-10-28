import React from "react";
import "./Pyramid.css";

export default function Pyramid(props) {
  const { moneyPyramid, questionNumber } = props;

  return (
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m) => (
          <li
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
  );
}
