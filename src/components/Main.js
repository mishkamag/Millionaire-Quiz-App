import Timer from "./Timer";
import Trivia from "./Trivia";
import "./Main.css";

export const Main = (props) => {
  const {
    earnedMoney,
    modalIsShow,
    setStop,
    questionNumber,
    setQuestionNumber,
    stop,
  } = props;

  return (
    <div className="main">
      {stop ? (
        <h1 className="endGameText">You Earned: {earnedMoney}</h1>
      ) : (
        <>
          {" "}
          <div className="top">
            <div className="timer">
              {!modalIsShow && (
                <Timer setStop={setStop} questionNumber={questionNumber} />
              )}
            </div>
          </div>
          <div className="bottom">
            <Trivia
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
        </>
      )}
    </div>
  );
};
