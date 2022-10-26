import "./trivia.css";
import data from "./Questions";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import play from "../assets/src_sounds_play.mp3";
import correct from "../assets/src_sounds_correct.mp3";
import wrong from "../assets/src_sounds_wrong.mp3";

export default function Trivia(props) {
  const { setStop, questionNumber, setQuestionNumber } = props;

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [corectAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const clickHandler = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (a.correct) {
        corectAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          selectedAnswer(null);
        });
      } else {
        wrongAnswer();
        //ჩასამატებელია სწორი პასუხი რომ გამომიჩნდეს ეკრანზე
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => clickHandler(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
