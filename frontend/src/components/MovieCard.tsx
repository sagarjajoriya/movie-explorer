import type { Movie } from '../types/movies.types';
import { Link } from 'react-router';

function MovieCard({
  movie: { id, title, year, rating, genres },
}: {
  movie: Movie;
}) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="card">
        <h3>
          {title} ({year})
        </h3>
        <p>Rating: {rating.toFixed(1)}</p>
        <p>Genres: {genres.join(', ')}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
