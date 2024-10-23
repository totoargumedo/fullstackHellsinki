function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Part(props) {
  return (
    <>
      <p>
        {props.part} {props.quantity}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Part
        part={props.exercises[0].part}
        quantity={props.exercises[0].quantity}
      />
      <Part
        part={props.exercises[1].part}
        quantity={props.exercises[1].quantity}
      />
      <Part
        part={props.exercises[2].part}
        quantity={props.exercises[2].quantity}
      />
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
          { part: part1, quantity: exercises1 },
          { part: part2, quantity: exercises2 },
          { part: part3, quantity: exercises3 },
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
