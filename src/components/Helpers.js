import "./Helpers.css";
import use50 from "../assets/5050.png";
import data from "./Questions";
import { useState } from "react";
import used50 from "../assets/5050used.png";
import audience from "../assets/audience.png";
import usedAudience from "../assets/audienceUsed.png";

export const Helpers = () => {
  const [changeFiftyImg, setChangeFiftyImg] = useState(false);
  const [changeAudienceImg, setChangeAudienceImg] = useState(false);

  const changeFiftyImgHandler = () => {
    setChangeFiftyImg(used50);
    const answersArr = data[0].answers.map((a) => a.correct);
    // console.log(answersArr);
    const randIndex = Math.floor(Math.random() * answersArr.length); // Random Index position in the array
    if (answersArr[randIndex] === !true) {
      const randomize = answersArr.splice(randIndex, 2);
      console.log(randomize);
    }
  };

  const changeAudienceImgHandler = () => {
    setChangeAudienceImg(usedAudience);
  };

  const checkFifty = changeFiftyImg ? used50 : use50;
  const checkAudience = changeAudienceImg ? usedAudience : audience;
  return (
    <div className="logos">
      <div className="fifty">
        <img
          src={checkFifty}
          alt="fifty-fifty"
          onClick={changeFiftyImgHandler}
        />
      </div>
      <div className="audience">
        <img
          src={checkAudience}
          alt="audience img"
          onClick={changeAudienceImgHandler}
        />
      </div>
    </div>
  );
};
