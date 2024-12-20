import { useEffect, useState } from "react";
import PhoneNumberList from "./components/PhonenumberList";
import SearchPerson from "./components/SearchPersonForm";
import AddPersonForm from "./components/AddPersonForm";
import Subtitle from "./components/Subtitle";
import Notification from "./components/Notification";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState({ content: null, type: null });

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

    const personExists = persons.find((person) => person.name === newName);

    if (personExists) {
      const confirmUpdate = window.confirm(
        "This person already exists. Do you want to update the number?"
      );
      if (!confirmUpdate) {
        return;
      }
      const changedPerson = { ...personExists, number: newNumber };
      personsService
        .update(personExists.id, changedPerson)
        .then((response) => {
          const updatedPersons = persons.map((person) =>
            person.id !== personExists.id ? person : response
          );
          setPersons(updatedPersons);
          setNewName("");
          setNewNumber("");
          handleMessageChange(`Updated ${response.name}`, "success");
        })
        .catch(() => {
          handleMessageChange(
            `Information of ${personExists.name} has already been removed from the server`,
            "error"
          );
          const updatedPersons = persons.filter(
            (person) => person.id !== personExists.id
          );
          setPersons(updatedPersons);
        });
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
      handleMessageChange(`Added ${response.name}`, "success");
    });
  };

  const handleMessageChange = (content, type) => {
    const newMessage = { content, type };
    setMessage(newMessage);
    setTimeout(() => {
      const updatedMessage = { ...message, content: null };
      setMessage(updatedMessage);
    }, 5000);
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
      <Notification message={message} />
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
