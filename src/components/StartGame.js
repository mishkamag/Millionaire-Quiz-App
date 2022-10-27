import Modal from "./Modal";

const StartGame = (props) => {
  return (
    <Modal>
      <h3>მზად ხართ თამაშის დასაწყებად</h3>
      <button onClick={props.onClose}>დიახ</button>
    </Modal>
  );
};

export default StartGame;
