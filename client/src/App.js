import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import Route and Switch from react router to create required routes
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  // Use effect hook to conduct api call for movies data, and if successfully resolved, enter data into movieList state variable
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(res => {
          setMovieList(res.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
          <Route path={'/movies/:id'} >
            <Movie />
          </Route>
          <Route path='/' >
            <MovieList movies={movieList}/>
          </Route>
        </Switch>
    </div>
  );
}
