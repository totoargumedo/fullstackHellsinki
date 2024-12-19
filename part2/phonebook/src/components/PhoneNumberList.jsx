import PhoneNumber from "./PhoneNumberItem";

const PhoneNumberList = (props) => {
  const { persons, handleRemovePerson } = props;
  return (
    <>
      {persons.map((person) => (
        <PhoneNumber
          key={person.name}
          person={person}
          handleRemovePerson={handleRemovePerson}
        />
      ))}
    </>
  );
};

export default PhoneNumberList;
