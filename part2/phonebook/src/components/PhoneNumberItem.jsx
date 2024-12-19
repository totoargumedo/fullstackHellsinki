const PhoneNumber = (props) => {
  const { person, handleRemovePerson } = props;
  return (
    <div>
      {person.name} - {person.number}
      <button onClick={() => handleRemovePerson(person.id)}>Delete</button>
    </div>
  );
};

export default PhoneNumber;
