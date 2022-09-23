import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
  const { id } = useParams();
  const history = useNavigate();
  return (
    <div>
      <h1>Movie Form {id}</h1>
      <div
        className="btn btn-primary"
        onClick={() => history('/movies')}
      >
        Save
      </div>
    </div>
  );
};

export default MovieForm;
