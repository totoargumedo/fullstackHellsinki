import { useState } from "react";

const Title = ({ text }) => {
  return <h2>{text}</h2>;
};

import React from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ text, value }) => {
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
  const [all, setAll] = useState([]);

  const updateAllVotes = (vote) => {
    const updatedAllVotes = all.concat(vote);
    setAll(updatedAllVotes);
  };

  const handleGoodVote = () => {
    const updatedVote = good + 1;
    setGood(updatedVote);
    updateAllVotes(1);
  };

  const handleNeutralVote = () => {
    const updatedVote = neutral + 1;
    setNeutral(updatedVote);
    updateAllVotes(0);
  };

  const handleBadVote = () => {
    const updatedVote = bad + 1;
    setBad(updatedVote);
    updateAllVotes(-1);
  };

  return (
    <>
      <Title text="Give Feedback" />
      <Button handleClick={handleGoodVote} text="Good" />
      <Button handleClick={handleNeutralVote} text="Neutral" />
      <Button handleClick={handleBadVote} text="Bad" />
      <Title text="Statistics" />
      <Statistics text="Good" value={good} />
      <Statistics text="Neutral" value={neutral} />
      <Statistics text="Bad" value={bad} />
      <Statistics text="All" value={all.length} />
      <Statistics
        text="Average"
        value={all.reduce((a, b) => a + b, 0) / all.length}
      />
      <Statistics text="Positive" value={(good / all.length) * 100 + "%"} />
    </>
  );
};

export default App;
