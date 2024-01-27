import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (ev) => {
    setText(ev.target.value);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  function handleTextToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.querySelector(".myBox").value;
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  }

  return (
    <>
      <div className="container mt-4">
        <h2>{props.heading}</h2>
        <Form.Group
          className="mb-3"
          id="myBox"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            placeholder="Your text..."
            value={text}
            className="myBox"
            onChange={handleOnChange}
            rows={8}
          />
        </Form.Group>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-2 my-1"
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowClick}
          className="btn btn-primary mx-2 my-1"
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleTextToSpeech}
          className="btn btn-primary mx-2 my-1"
        >
          Text to Speech
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearText}
          className="btn btn-primary mx-2 my-1"
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length
            }
          </b>{" "}
          words & <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((elem) => {
                return elem.length !== 0;
              }).length}
          </b>{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text?.length <= 0 ? "No text to display here" : text}</p>
      </div>
    </>
  );
}
