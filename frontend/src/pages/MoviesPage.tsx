import { useEffect, useState } from 'react';
import { getMovies } from '../api/movies';
import type { Movie } from '../types/movies.types';
import type { Paginated } from '../types/pagination.types';
import { getErrorMessage } from '../api/get-error-message';
import MovieCard from '../components/MovieCard';

type MoviesState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; result: Paginated<Movie> };

function MoviesPage() {
  const [state, setState] = useState<MoviesState>({ status: 'loading' });

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setState({ status: 'loading' });
        const result = await getMovies(abortController.signal);
        setState({ status: 'success', result });
      } catch (err: unknown) {
        if (abortController.signal.aborted) return;

        setState({ status: 'error', message: getErrorMessage(err) });
      }
    }
    void fetchData();

    return () => abortController.abort();
  }, []);

  function renderContent() {
    switch (state.status) {
      case 'loading':
        return <p>Loading...</p>;
      case 'error':
        return <p>{state.message}</p>;
      case 'success': {
        const { data } = state.result;

        if (data.length === 0) {
          return <p>No movies found.</p>;
        }

        return (
          <div className="card-grid">
            {data.map((m) => (
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
