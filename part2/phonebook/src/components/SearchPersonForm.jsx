const SearchPerson = ({ handleSearchChange }) => {
  return (
    <>
      <form>
        <div>
          Search: <input type="text" onChange={handleSearchChange} />
        </div>
      </form>
    </>
  );
};

export default SearchPerson;
