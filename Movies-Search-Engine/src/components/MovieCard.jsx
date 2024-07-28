import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div className='w-64 border-solid border-1 border-sky-500 p-6 bg-slate-800 rounded-xl flex flex-col items-center'>
      <h4 className='mb-4 text-center text-sky-400 font-semibold'>{movie.Title}</h4>
      
      <img 
        className='h-72 w-full rounded-xl object-cover mb-4' 
        src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} 
        alt={movie.Title}
      />

      <h3 className='text-yellow-100 text-md ' >{movie.Year}</h3>
    
    </div> 
  );
};
