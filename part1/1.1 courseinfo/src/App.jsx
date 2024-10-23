function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Content(props) {
  return (
    <>
      <p>
        {props.exercises[0].part1} {props.exercises[0].exercises1}
      </p>
      <p>
        {props.exercises[1].part2} {props.exercises[1].exercises2}
      </p>
      <p>
        {props.exercises[2].part3} {props.exercises[2].exercises3}
      </p>
    </>
  );
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        exercises={[
          { part1, exercises1 },
          { part2, exercises2 },
          { part3, exercises3 },
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
