import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
    "Simplicity is the soul of efficiency.",
    "Code never lies, comments sometimes do.",
    "There is no code faster than no code.",
    "First, solve the problem. Then, write the code.",
    "Walking on water and developing software from a specification are easy if both are frozen.",
    "A good programmer is someone who looks both ways before crossing a one-way street.",
    "One man's crappy software is another man's full-time job.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The best way to predict the future of software is to write it.",
    "Good code is its own best documentation.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Software and cathedrals are much the same – first we build them, then we pray.",
    "The best way to get a project done faster is to start sooner.",
    "A program is never less than 90% complete, and never more than 95% complete.",
    "If you don’t handle errors, errors will handle you.",
    "Make it work, make it right, make it fast.",
  ];
  const [selected, setSelected] = useState(0);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={getRandomQuote} text="Next Anecdote" />
    </>
  );
};

export default App;
