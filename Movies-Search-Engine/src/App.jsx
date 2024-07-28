import { useState, useEffect } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { MovieCard } from './components/MovieCard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=122911e2';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('The Office');
  }, []);

  return (
    <>
      <h2 className='text-yellow-100 text-3xl my-4 mx-9 cursor-pointer'><a href="https://github.com/itsonlyTushar" target='_blank' ><FaGithub /></a></h2>
      <h1 className='text-sky-400 text-4xl mb-4 text-center my-4 font-bold mx-8'>Search Engine </h1>
      <div className="p-6 max-w-md mx-auto bg-slate-800 rounded-xl flex space-x-4">
        <input 
          className='bg-slate-800 border-none text-yellow-100 text-xl flex-1'
          type="text" 
          name='search-box'
          id='search-form'
          value={searchTerm}
          placeholder='Search the Movie/Show....'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className='text-rose-400'
          onClick={() => searchMovies(searchTerm)}
        >
          <FaSearch />
        </button>
      </div>

      {
        movies?.length > 0 ? (
          <div className='flex flex-wrap justify-center gap-4 p-4'>
            {movies.map((movie,index) => (
              <>
              <MovieCard movie={movie} key={index} />
              </>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </>
  );
}

export default App;
