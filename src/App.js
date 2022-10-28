import { useEffect, useMemo, useState } from "react";
import StartGame from "./components/StartGame";
import play from "./assets/src_sounds_play.mp3";
import useSound from "use-sound";
import { Main } from "./components/Main";
import Pyramid from "./components/Pyramid";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");
  const [modalIsShow, setModalIsShow] = useState(true);

  const [letsPlay] = useSound(play);

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

  return (
    <div className="app">
      {modalIsShow && <StartGame onClose={hideModalHandler} />}

      <Main
        earnedMoney={earnedMoney}
        modalIsShow={modalIsShow}
        setStop={setStop}
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
        stop={stop}
      />

      <Pyramid moneyPyramid={moneyPyramid} questionNumber={questionNumber} />
    </div>
  );
}

export default App;
