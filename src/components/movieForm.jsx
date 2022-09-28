import Joi from 'joi-browser';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from './../services/fakeMovieService';
import { useForm } from './common/useForm';

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Number In Stock'),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Daily Rental Rate'),
  };

  const [genres, setGenres] = useState([]);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const genres = getGenres();
    setGenres(genres);

    const movieId = id;
    if (movieId === 'new') return;

    const movie = getMovie(movieId);

    if (!movie) navigate('/not-found', { replace: true });
    
    setMovieData(mapToViewModel(movie));
  }, [data]);

  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  const doSubmit = () => {    
    saveMovie(data);

    navigate('/movies');
  };

  const { handleSubmit, renderButton, renderInput, renderSelect, data } =
    useForm(schema, doSubmit, movieData);

  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={handleSubmit}>
        {renderInput('title', 'Title')}
        {renderSelect('genreId', 'Genre', genres)}
        {renderInput('numberInStock', 'Number In Stock', 'number')}
        {renderInput('dailyRentalRate', 'Rate')}
        {renderButton('Save')}
      </form>
    </div>
  );
};

export default MovieForm;
