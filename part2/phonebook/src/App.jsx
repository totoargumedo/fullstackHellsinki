import { useEffect, useState } from "react";
import PhoneNumberList from "./components/PhonenumberList";
import SearchPerson from "./components/SearchPersonForm";
import AddPersonForm from "./components/AddPersonForm";
import Subtitle from "./components/Subtitle";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((response) => {
      const personsGet = response;
      setPersons(personsGet);
    });
  }, []);

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
    personsService.create(personObject).then((response) => {
      const updatedPersons = persons.concat(response);
      setPersons(updatedPersons);
      setNewName("");
      setNewNumber("");
    });
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

  const removePerson = (id) => {
    const confirmRemove = window.confirm("Do you want to remove this person?");
    if (!confirmRemove) {
      return;
    }
    personsService.remove(id).then(() => {
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
    });
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
      <PhoneNumberList
        persons={filteredPersons}
        handleRemovePerson={removePerson}
      />
    </div>
  );
};

export default App;
