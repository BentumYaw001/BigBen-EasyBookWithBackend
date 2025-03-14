import React, { useEffect, useState, useMemo } from "react";
import { useCountryStore } from "../page/Store";

const CountryDropdown = () => {
  const { countries, selectedCountry, setCountries, setSelectedCountry } =
    useCountryStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryData = data.map((country) => ({
          name: country.name.common,
          code: country.cca3,
          flag:
            country.flags?.svg ||
            country.flags?.png?.replace("http://", "https://"),
          callingCode: country.idd?.root
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
            : "N/A",
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!countries.length) {
      fetchCountries();
    } else {
      setLoading(false);
    }
  }, [setCountries, countries.length]);

  const sortedCountries = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name)),
    [countries]
  );

  const handleSelectChange = (event) => {
    const selected = countries.find(
      (country) => country.code === event.target.value
    );
    setSelectedCountry(selected);
  };

  return (
    <div className="CountryCode">
      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <>
          <select id="country" onChange={handleSelectChange} defaultValue="">
            <option value="" disabled>
              Select a country
            </option>
            {sortedCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.callingCode})
              </option>
            ))}
          </select>

          <div className="placeholder">
            {selectedCountry ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {selectedCountry.flag && (
                  <img
                    src={selectedCountry.flag}
                    width="30"
                    height="20"
                    alt="flag"
                    crossOrigin="anonymous"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                <span>{selectedCountry.callingCode}</span>
              </div>
            ) : (
              <span style={{ color: "gray", marginLeft: "20px" }}>+000</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDropdown;
