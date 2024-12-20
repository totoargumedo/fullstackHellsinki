import CountryItem from "./CountryItem";

const CountryList = ({ countries, handleShowInfo, buttonLabel }) => {
  return (
    <>
      <ul>
        {countries.map((country) => (
          <CountryItem
            key={country.name.common}
            country={country}
            handleShowInfo={handleShowInfo}
            buttonLabel={buttonLabel}
          />
        ))}
      </ul>
    </>
  );
};
export default CountryList;
