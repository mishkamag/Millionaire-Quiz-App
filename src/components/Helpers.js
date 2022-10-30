import "./Helpers.css";
import use50 from "../assets/5050.png";
// import data from "./Questions";
import { useState } from "react";
import used50 from "../assets/5050used.png";
import audience from "../assets/audience.png";
import usedAudience from "../assets/audienceUsed.jpg";

export const Helpers = () => {
  const [changeFiftyImg, setChangeFiftyImg] = useState(use50);
  const [changeAudienceImg, setChangeAudienceImg] = useState(audience);

  const changeFiftyImgHandler = () => {
    setChangeFiftyImg(used50);
  };

  const changeAudienceImgHandler = () => {
    setChangeAudienceImg(usedAudience);
  };

  return (
    <div className="logos">
      <div className="fifty">
        <img
          onClick={changeFiftyImgHandler}
          src={changeFiftyImg ? use50 : used50}
          alt="fifty-fifty"
        />
      </div>
      <div className="audience">
        <img
          src={changeAudienceImg ? audience : usedAudience}
          alt="audience img"
          onClick={changeAudienceImgHandler}
        />
      </div>
    </div>
  );
};
