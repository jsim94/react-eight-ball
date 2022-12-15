import Reach, { useState } from "react";
import "./EightBall.css";

function EightBall({
  answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
}) {
  const DEFAULT_MSG = "Think of a Question";
  const DEFAULT_COLOR = "black";
  const DEFAULT_CLICKS = { green: 0, goldenrod: 0, red: 0 };

  const [text, setText] = useState(DEFAULT_MSG);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [clicks, setClicks] = useState(DEFAULT_CLICKS);

  function randAnswer() {
    const i = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[i];
    setText(msg);
    setColor(color);

    const newClicks = { ...clicks };
    newClicks[color] = clicks[color] + 1;
    setClicks(newClicks);
  }

  function reset() {
    setText(DEFAULT_MSG);
    setColor(DEFAULT_COLOR);
    setClicks(DEFAULT_CLICKS);
  }

  return (
    <>
      <div className="EightBall" onClick={randAnswer} style={{ background: color }}>
        <p>{text}</p>
      </div>
      <p>
        Click count - Green: {clicks.green}, Yellow: {clicks.goldenrod}, Red: {clicks.red}
      </p>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default EightBall;
