import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import DisplayWeather from './DisplayWeather';



function Home() {
  // State
  const [apiData, setApiData] = useState();
  const [getState, setGetState] = useState("Sukkur");
  const [state, setState] = useState("Sukkur");

  const apiUrl = `http://localhost:3001/getForecast?city=${state}`;

  // Hook Method
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
      debugger;
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
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
        </div>
        {apiData !== undefined ? (
        <div>
          <DisplayWeather data={apiData} />
        </div>
      ) : null}
        </div>
        
  );
}

export default Home;
