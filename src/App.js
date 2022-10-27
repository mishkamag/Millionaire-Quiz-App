import { Fragment, useEffect, useMemo, useState } from "react";
import "./app.css";
import StartGame from "./components/StartGame";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import play from "./assets/src_sounds_play.mp3";
import useSound from "use-sound";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");

  const [modalIsShow, setModalIsShow] = useState(true);
  const [letsPlay] = useSound(play);

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  const hideModalHandler = () => {
    letsPlay();
    setModalIsShow(false);
  };

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarnedMoney(
        moneyPyramid.find((m) => m.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);
  //მოგებული თანხის გამოთვლა

  return (
    <Fragment>
      {modalIsShow && <StartGame onClose={hideModalHandler} />}
      <div className="app">
        <div className="main">
          {stop ? (
            <h1 className="endGameText">You Earned: {earnedMoney}</h1>
          ) : (
            <>
              {" "}
              <div className="top">
                <div className="timer">
                  <Timer setStop={setStop} questionNumber={questionNumber} />
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
      </div>
    </Fragment>
  );
}

export default App;
