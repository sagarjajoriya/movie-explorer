import type { Movie } from '../types/movies.types';

function MovieCard({
  movie: { title, year, rating, genres },
}: {
  movie: Movie;
}) {
  return (
    <div className="card">
      <h3>
        {title} ({year})
      </h3>
      <p>Rating: {rating.toFixed(1)}</p>
      <p>Genres: {genres.join(', ')}</p>
    </div>
  );
}

export default MovieCard;
