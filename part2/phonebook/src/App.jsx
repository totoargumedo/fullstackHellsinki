import { useState } from "react";
import PhoneNumberList from "./components/PhonenumberList";
import SearchPerson from "./components/SearchPersonForm";
import AddPersonForm from "./components/AddPersonForm";
import Subtitle from "./components/Subtitle";

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
      <Subtitle text="Add new phone" />
      <AddPersonForm
        handleOnSubmit={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Subtitle text="Search" />
      <SearchPerson handleSearchChange={searchPerson} />
      <Subtitle text="Number" />
      <PhoneNumberList persons={filteredPersons} />
    </div>
  );
};

export default App;
