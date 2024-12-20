const CountryCard = ({ country }) => {
  const languages = Object.entries(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital[0]}</div>
      <div>Population: {country.population}</div>
      <img
        src={country.flags.png}
        height="100"
        alt={`Flag of ${country.name.common}`}
      />
      <ul>
        <h2>Languages</h2>
        {languages.map(([code, language]) => (
          <li key={code}>{language}</li>
        ))}
      </ul>
    </div>
  );
};
export default CountryCard;
