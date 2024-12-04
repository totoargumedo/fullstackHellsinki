const Total = ({ course }) => {
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <>
      <p>
        <strong>Number of exercises {total}</strong>
      </p>
    </>
  );
};

export default Total;
