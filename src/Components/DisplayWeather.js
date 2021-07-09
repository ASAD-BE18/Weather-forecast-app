import React from "react";
import "./displayweather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

function DisplayWeather(props) {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = props.data;

  let weatherIcon = null;

  if (main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  const forecasts = forecast.map((item) => {
    return (
      <div className="col-md-3 mt-3" key={item.dt}>
        <ul className="list-group" >
          <li className="list-group-item list-group-item-danger">
            {item.main.temp}&#176;C
          </li>
          <li className="list-group-item list-group-item-primary">
            <img
              alt="icon"
              src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            />
          </li>
          <li className="list-group-item list-group-item-danger">
            Time: {item.dt_txt.slice(11, 13) * 1}:00
          </li>
          <li className="list-group-item list-group-item-success">
            {item.dt_txt.slice(8, 10)}-{item.dt_txt.slice(5, 7)}-
            {new Date().toDateString().slice(11, 15)}
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="mt-2 mb-2 p-2">
      <div className="col-md-6 offset-3">
        <div className="display-4">
          {city} , {country}
        </div>
        <div className="display-5"> {date} </div>
      </div>

      <div className="container d-flex h-200"></div>
      <div className="row offset-4">
        <div className="col-md-3 offset- justify-content-center align-self-center">
          <div className="weather-icon">{weatherIcon}</div>
        </div>
        <div className="col-md-3  justify-content-center align-self-center">
          <div className="display-4">{temp}&#176;C</div>
          <div className="display-4"> {description} </div>
        </div>
      </div>
      <div className="col-md-6 offset-3 align-self-center">
        <div className="weathercard">
          <div className="parameter">
            {highestTemp}&#176;
            <br />
            High
          </div>
          <div className="parameter">
            {wind}mph
            <br />
            Wind
          </div>
          <div className="parameter">
            {sunrise}
            <br />
            Sunrise
          </div>
          <div className="parameter">
            {Math.floor(lowestTemp)}&#176;
            <br />
            Low
          </div>
          <div className="parameter">
            {humidity}%
            <br />
            Rain
          </div>
          <div className="parameter">
            {sunset}
            <br />
            Sunset
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{forecasts}</div>
      </div>
    </div>
  );
}

export default DisplayWeather;
