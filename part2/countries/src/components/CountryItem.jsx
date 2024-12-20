const CountryItem = ({ country, handleShowInfo, buttonLabel }) => {
  return (
    <li>
      {country.name.common}{" "}
      <button onClick={() => handleShowInfo(country.name.common)}>
        {buttonLabel}
      </button>
    </li>
  );
};

export default CountryItem;
