import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

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

  const searchPerson = (event) => {
    setFilter(event.target.value);
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
      <h2>Numbers</h2>
      <form action="">
        <div>
          Search: <input type="text" onChange={searchPerson} />
        </div>
      </form>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} - {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
