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

  // const removeRandom = (array) => {
  //   while (array.length) {
  //     const random = Math.floor(Math.random() * array.length);
  //     const el = array.splice(random ? null : 2)[0];
  //     console.log(el);
  //   }
  // };

  const changeFiftyImgHandler = () => {
    setChangeFiftyImg(used50);
    const answs = data[0].answers.map((a) => a.correct);
    console.log(answs);
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
