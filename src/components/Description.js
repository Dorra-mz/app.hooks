import React from 'react';

function Description({ title, description }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
