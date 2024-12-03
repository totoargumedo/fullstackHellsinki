import { useState } from "react";

const Title = ({ text }) => {
  return <h2>{text}</h2>;
};

import React from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const VoteResult = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickVote = (vote) => {
    switch (vote) {
      case "good":
        const goodVote = good + 1;
        setGood(goodVote);
        break;
      case "neutral":
        const neutralVote = neutral + 1;
        setNeutral(neutralVote);
        break;
      case "bad":
        const badVote = bad + 1;
        setBad(badVote);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Title text="Give Feedback" />
      <Button handleClick={() => handleClickVote("good")} text="Good" />
      <Button handleClick={() => handleClickVote("neutral")} text="Neutral" />
      <Button handleClick={() => handleClickVote("bad")} text="Bad" />
      <Title text="Statistics" />
      <VoteResult text="Good" value={good} />
      <VoteResult text="Neutral" value={neutral} />
      <VoteResult text="Bad" value={bad} />
    </>
  );
};

export default App;
