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
        {props.name} {props.exercises}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Part
        name={props.exercises[0].name}
        exercises={props.exercises[0].exercises}
      />
      <Part
        name={props.exercises[1].name}
        exercises={props.exercises[1].exercises}
      />
      <Part
        name={props.exercises[2].name}
        exercises={props.exercises[2].exercises}
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content exercises={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}

export default App;
