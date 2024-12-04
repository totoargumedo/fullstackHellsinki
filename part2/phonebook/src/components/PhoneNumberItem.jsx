const PhoneNumber = ({ person }) => {
  return (
    <div>
      {person.name} - {person.number}
    </div>
  );
};

export default PhoneNumber;
