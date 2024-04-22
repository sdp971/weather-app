


import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [favoritList, setFavoritList] = useState([
    {
      citySearched: "",
      main: "",
      description: "",
      icon: "",
    }
  ]);

function handleAddFavorite  (newFavorite)  {
    setFavoritList((prevList) => [...prevList, newFavorite]);
  }

  return (
    <>
      <Router>
        <NavBar />
      

        <Routes>
          <Route
            path='/'
            element={<Search onAddFavorite={handleAddFavorite} />}
          />
          <Route
            path='/favorites'
            element={favoritList.map((city, i) => (
              <div key={i}>
                <img
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt=''
                />
                <p>{city.name}</p>
                <p>{city.main}</p>
                <p>{city.description}</p>
              </div>
            ))}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App
