import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    { id: 1, title: 'Inception', description: 'A thief who enters the dreams of others to steal secrets from their subconscious.', poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', poster: 'https://via.placeholder.com/150' },
    { id: 3, title: 'The Dark Knight', description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', poster: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Movies App</h1>
      </header>
      <main>
        <Description title="Featured Movies" description="Explore our collection of amazing movies." />
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
