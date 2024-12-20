import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showInfo, setShowInfo] = useState(null);
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

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
      {showInfo ? <CountryCard country={showInfo} /> : null}
    </div>
  );
}

export default App;
