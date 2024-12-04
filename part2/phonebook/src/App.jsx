import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };
    const updatedPersons = [...persons, personObject];
    setPersons(updatedPersons);
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:
          <input
            type="text"
            onChange={handleNameChange}
            value={newName}
            required
          />
        </div>
        <div>
          Number:
          <input
            type="text"
            onChange={handleNumberChange}
            value={newNumber}
            required
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} - {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
