import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

import "./App.css";
import Search from "./components/Search";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [message, setMessage] = useState();

  const [theme, setTheme] = useState(true);
  const handleTheme = () =>{
    setTheme(!theme)
    console.log(theme)
  }

  const succes = (pos) => {
    console.log(pos);
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    setCoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=f5a1e603edd24093ab57749f50fa45a3`;

      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);

          const newTemp = {
            celsius,
            fahrenheit,
          };
          setTemp(newTemp);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.cityName.value) {
      
    
    const city = e.target.cityName.value;
    console.log(city);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5a1e603edd24093ab57749f50fa45a3`;
    console.log(URL);


    axios
      .get(URL)
      .then((res) => {
        setWeather(res.data) 
        setMessage(false)
      })
      .catch((err) => setMessage(true));

    
    }
    

    
  
}
  return (
    <div className="App  ">
      {weather ? (
        <>
        
        <Weather weather={weather} temp={temp} handleSubmit={handleSubmit} message={message} theme={theme} handleTheme={handleTheme} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
