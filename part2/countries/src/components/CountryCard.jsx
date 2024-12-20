const CountryCard = ({ country, weather }) => {
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
      {weather ? (
        <div>
          <h2>Weather in {weather.name}</h2>{" "}
          <p>Temperature: {weather.main.temp}</p>
          <h3>{weather.weather[0].description}</h3>
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              weather.weather[0].icon +
              "@2x.png"
            }
            alt={weather.weather[0].description}
          />
          <p>Wind: {weather.wind.speed} km/s</p>
        </div>
      ) : null}
    </div>
  );
};
export default CountryCard;
