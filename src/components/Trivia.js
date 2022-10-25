import "./trivia.css";

export default function Trivia() {
  return (
    <div className="trivia">
      <div className="question">რომელ წელს მოხდა დიდგორის ბრძოლა?</div>
      <div className="answers">
        <div className="answer wrong">1212</div>
        <div className="answer">1121</div>
        <div className="answer">1122</div>
        <div className="answer">1221</div>
      </div>
    </div>
  );
}
