import "./Helpers.css";
import use50 from "../assets/5050.png";

export const Helpers = () => {
  const clickImgHandler = () => {
    console.log("clicked");
  };

  return (
    <div className="fifty">
      <img src={use50} alt="fifty-fifty" onClick={clickImgHandler} />
    </div>
  );
};
