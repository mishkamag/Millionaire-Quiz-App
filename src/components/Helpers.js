import "./Helpers.css";
import use50 from "../assets/5050.png";
// import data from "./Questions";
import { useState } from "react";
import used50 from "../assets/5050used.png";
import audience from "../assets/audience.png";
import usedAudience from "../assets/audienceUsed.jpg";

export const Helpers = () => {
  const [changeFiftyImg, setChangeFiftyImg] = useState(false);
  const [changeAudienceImg, setChangeAudienceImg] = useState(false);

  const changeFiftyImgHandler = () => {
    setChangeFiftyImg(used50);
    console.log("clicked");
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
