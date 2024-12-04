const AddPersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleOnSubmit}>
        <div>
          Name:
          <input
            type="text"
            onChange={props.handleNameChange}
            value={props.newName}
            required
          />
        </div>
        <div>
          Number:
          <input
            type="text"
            onChange={props.handleNumberChange}
            value={props.newNumber}
            required
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddPersonForm;
