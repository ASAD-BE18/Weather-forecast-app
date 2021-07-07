import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

import countries from "i18n-iso-countries";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function Home() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Sukkur");
  const [state, setState] = useState("Sukkur");

  const apiUrl = `http://localhost:3001/getForecast?city=${state}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="col-auto">
            <label htmlFor="location-name" className="col-form-label">
              Enter Location :
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="location-name"
              className="form-control"
              onChange={inputHandler}
              value={getState}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
        </div>

        <div className="card mt-3 mx-auto" style={{ width: "300px" }}>
          {apiData.main ? (
            <div className="card-body text-center">
              <img
                src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@4x.png`}
                alt="weather status icon"
                style={{ width: "100px" }}
              />

              <p className="h2 text-center">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>
                <strong>{apiData.name}</strong>
              </p>
              <p className="text-center">
                <strong>
                  Min. Temperature: {kelvinToFarenheit(apiData.main.temp_min)}
                  &deg; C
                </strong>
              </p>
              <p>
                <strong>
                  Max. Temperature: {kelvinToFarenheit(apiData.main.temp_max)}
                  &deg; C
                </strong>
              </p>
              <p>
                <strong>Humidity: {apiData.main.humidity}%</strong>
              </p>

              <p>
                <strong>{apiData.weather[0].main}</strong>
              </p>
              <p className="h5">
                <strong>
                  {countries.getName(apiData.sys.country, "en", {
                    select: "official",
                  })}
                </strong>
              </p>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
