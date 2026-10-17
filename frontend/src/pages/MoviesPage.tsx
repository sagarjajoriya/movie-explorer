import { getMovies } from '../api/movies';
import { getErrorMessage } from '../api/get-error-message';
import MovieCard from '../components/MovieCard';
import { useAsync } from '../hooks/useAsync';

function MoviesPage() {
  const state = useAsync(getMovies, 'movies');

  function renderContent() {
    switch (state.status) {
      case 'loading':
        return <p>Loading...</p>;
      case 'error':
        return <p role="alert">{getErrorMessage(state.error)}</p>;
      case 'success': {
        const movies = state.data.data;

        if (movies.length === 0) {
          return <p>No movies found.</p>;
        }

        return (
          <div className="card-grid">
            {movies.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        );
      }
    }
  }

  return (
    <div className="movies-container">
      <h2>Movies</h2>
      {renderContent()}
    </div>
  );
}

export default MoviesPage;
