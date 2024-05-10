import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css'


function App() {
  const [movie, setMovie] = useState();
  const getMovie = async(searchTerm) => {
    try {
    // Make fetch request and store the response
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
  };
    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie("Clueless");
    }, []);


  return (
    <div className='App'>
      {/* <h1>{import.meta.env.VITE_API_KEY}</h1> */}
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
  
    </div>
  )
}

export default App
