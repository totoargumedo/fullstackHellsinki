import { useState } from "react";

const Title = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = (props) => {
  if (props.all.length === 0) {
    return <p>No feedback given yet</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good} />
          <StatisticsLine text="Neutral" value={props.neutral} />
          <StatisticsLine text="Bad" value={props.bad} />
          <StatisticsLine text="All" value={props.all.length} />
          <StatisticsLine
            text="Average"
            value={props.all.reduce((a, b) => a + b, 0) / props.all.length}
          />
          <StatisticsLine
            text="Positive percentage"
            value={(props.good / props.all.length) * 100}
          />
        </tbody>
      </table>
    </>
  );
};

const StatisticsLine = ({ text, value }) => {
  if (!value) {
    return (
      <tr>
        <td>No {text} value given yet</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}:</td>
      <td>{Number.isInteger(value) ? value : value.toFixed(2)}</td>
    </tr>
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
      <Statistics all={all} good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
