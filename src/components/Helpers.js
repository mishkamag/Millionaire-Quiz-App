import "./Helpers.css";
import use50 from "../assets/5050.png";
import data from "./Questions";
import { useState } from "react";

export const Helpers = () => {
  const [hideAnswer, setHideAnswer] = useState(false);

  const clickImgHandler = () => {
    setHideAnswer(true);
    console.log(data[0].answers[0].correct);
  };

  return (
    <div className="fifty">
      <img src={use50} alt="fifty-fifty" onClick={clickImgHandler} />
    </div>
  );
};
