import Modal from "./Modal";
import "./Modal.css";

const StartGame = (props) => {
  return (
    <Modal>
      <div className="container">
        <h3>მზად ხართ თამაშის დასაწყებად ?</h3>
        <button onClick={props.onClose}>დიახ</button>
      </div>
    </Modal>
  );
};

export default StartGame;
