import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={movie.poster} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;