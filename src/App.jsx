
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import  Weather  from './components/Weather';
import Loader from './components/Loader';

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const success = (pos) => {
      const currentCoords = {
        lat:pos.coords.latitude,
        long:pos.coords.longitude,
      };
      setCoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  },[]);

  useEffect(() => {
    if(coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=1ba8b2414d0312212db718e042f48a5a`;

      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * (9/5)+32).toFixed(1)
          const newTemps = {
            celsius,
            
            farenheit
          }
          setTemp(newTemps)
        })
        .catch((err) => console.log(err));
    }
  },[coords])

  return (
    <div className="App grid place-content-center min-h-screen bg-[url('/images/bg.jpg')] bg-cover px-2">
      {
        weather ? (
          <Weather weather={weather} temp={temp} />
        ) : (
          <Loader />
        )
      }; 
      
    </div>
  );
}

export default App
