import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import ForecastDay from './ForecastDay'; 
import ForecastCurrent from './ForecastCurrent';
import ForecastDays from './ForecastDays';
import ForecastList from './ForecastList';

const appID = '21bd6ece86599e9e3244ec3b7fb7cf35';
const defaultCoords = {lat: "40.714291", lon: "-74.001954"};

const ForecastWeather = () => {

  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState(null);
  const [load, setLoad] = useState(false);
  const [coords, setCoords] = useState(defaultCoords);
  const [error, setError] = useState(null);

  const fetchForecast = (coords) => {
    const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${appID}&units=metric&exclude=minutely,hourly,alerts`; 
    return fetch(urlForecast)
      .then(response => response.json());  
  }

  const fetchCity = (coords) => {
    const urlCity = `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lon}&limit=1&appid=${appID}`;
    return fetch(urlCity)
      .then(response => response.json());
  }

  const fetchData = (coords) => {
    fetchForecast(coords).then(result => {
      setForecast(result);
    }).then(
        fetchCity(coords).then(res => {
          setCity(res);
          setLoad(true);
        }))
  }

  const checkLocation = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  } 

  useEffect(() => {
    fetchData(coords);
    checkLocation().then(
      (position) => {
        const coords = {lat: position.coords.latitude.toFixed(6), lon: position.coords.longitude.toFixed(6)}
        fetchData(coords);
        setCoords(coords)
      }, 
      (error) => {
        setError(error);
      }) 
  }, ['forecast', 'city']);

  return (
    <div className='forecast'>
      { error && <p className='alert'>Allow to use your location!</p>}
      {!load && <p>Loading..</p>}
      { load && forecast &&
        <>          
          <ForecastCurrent city={city} current={forecast.current}/>
          <ForecastList forecast={forecast} />
        </>
      }
    </div>
  );
}

export default ForecastWeather;