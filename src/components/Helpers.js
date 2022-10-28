import "./Helpers.css";
import use50 from "../assets/5050.png";
import data from "./Questions";

export const Helpers = () => {
  const clickImgHandler = () => {
    console.log(data[0].answers[0].correct);
  };

  return (
    <div className="fifty">
      <img src={use50} alt="fifty-fifty" onClick={clickImgHandler} />
    </div>
  );
};
