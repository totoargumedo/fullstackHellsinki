import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";
const weather_api_key = import.meta.env.VITE_SOME_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showInfo, setShowInfo] = useState(null);
  const [weather, setWeather] = useState(null);
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (showInfo) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${showInfo.capital[0]}&APPID=${weather_api_key}`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, [showInfo]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleShowInfo = (countryName) => {
    if (!showInfo) {
      const country = countries.find(
        (country) => country.name.common === countryName
      );
      setShowInfo(country);
    } else {
      setShowInfo(null);
    }
  };

  return (
    <div>
      <form>
        <div>
          Find counties:
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Write a country name"
          />
        </div>
      </form>
      <div>
        <h2>Countries</h2>
        {filteredCountries.length == 1 ? (
          <CountryCard country={filteredCountries[0]} />
        ) : filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <CountryList
            countries={filteredCountries}
            handleShowInfo={handleShowInfo}
            buttonLabel={showInfo ? "hide" : "show"}
          />
        )}
      </div>
      {showInfo ? <CountryCard country={showInfo} weather={weather} /> : null}
    </div>
  );
}

export default App;
