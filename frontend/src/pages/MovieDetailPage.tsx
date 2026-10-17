import { Link, useParams } from 'react-router';
import { getMovieDetail } from '../api/movies';
import { isNotFoundError } from '../api/api-error';
import { getErrorMessage } from '../api/get-error-message';
import { useAsync } from '../hooks/useAsync';
import { parseMovieId } from '../utils/movie.helper';

function MovieDetailPage() {
  const { id } = useParams();
  const movieId = parseMovieId(id);

  return (
    <div>
      <Link to="/movies">← Back to movies</Link>
      {movieId === null ? (
        <MovieNotFound />
      ) : (
        <MovieDetail key={movieId} id={movieId} />
      )}
    </div>
  );
}

function MovieDetail({ id }: { id: number }) {
  const state = useAsync((signal) => getMovieDetail(id, signal), id);

  switch (state.status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      if (isNotFoundError(state.error)) {
        return <MovieNotFound />;
      }
      return <p role="alert">{getErrorMessage(state.error)}</p>;
    case 'success': {
      const { title, year, rating, genres, overview } = state.data;
      return (
        <>
          <title>{`${title} · Movie Explorer`}</title>
          <h2>{title}</h2>
          <p>Year: {year}</p>
          <p>Rating: {rating.toFixed(1)}</p>
          <p>Genres: {genres.join(', ')}</p>
          <p>Overview: {overview}</p>
        </>
      );
    }
  }
}

function MovieNotFound() {
  return (
    <>
      <title>Movie not found · Movie Explorer</title>
      <h2>Movie not found</h2>
      <p>
        We couldn't find that movie. <Link to="/movies">Browse all movies</Link>
      </p>
    </>
  );
}

export default MovieDetailPage;
