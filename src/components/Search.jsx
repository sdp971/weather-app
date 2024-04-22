import { useState,useEffect} from 'react';
import './Search.css';
import axios from 'axios';

function Search() {
  const [citySearched, setCitySearched] = useState('');
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_APP_API_KEY


  useEffect(() => {
    if (citySearched) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${citySearched}&appid=${apiKey}`
        )
        .then((response) => {
          setData(response.data.weather);
        })
        .catch((error) => {
          console.error(error);
        });
   }
   
   },[citySearched,apiKey])

   function handleSubmit (e) {
  e.preventDefault;
   }
  
  function handleChange  (e) {
     setCitySearched(e.target.value);

     if (e.target.value === '') {
       setData([]); 
     }
   }
  

 
  return (
    <div className='search-bar-container'>
      <h1>Weather app</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='search-bar'
          type='text'
          placeholder='Tapez le nom de la ville'
          aria-label='Recherche de la météo par ville'
          onChange={handleChange}
          value={citySearched}
        />
      </form>
      { data && data.length > 0 ?(data.map((weather, i) => (
        <div key={i}>
          <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
          <p >{weather.main}</p>
          <p>{weather.description}</p>
        </div>
      ))):(<p></p>)}
    </div>
  );
}

export default Search;
