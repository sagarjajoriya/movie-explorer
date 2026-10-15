import { Injectable } from '@nestjs/common';
import { Movie, SortField, FindMovieOptions } from './movie.interface';
import { Paginated } from 'src/common/interfaces/paginated.interface';
import { MOVIES_LIST } from './movies.data';

@Injectable()
export class MoviesService {
  private readonly movies: readonly Movie[] = MOVIES_LIST;

  findAll(query: FindMovieOptions): Paginated<Movie> {
    const { search, genre, minRating, year, sortBy, order, page, limit } =
      query;

    const searchLowercase = search?.toLowerCase();
    const genreLowercase = genre?.toLowerCase();
    const filteredMovies = this.movies.filter((m) => {
      if (searchLowercase && !m.title.toLowerCase().includes(searchLowercase)) {
        return false;
      }
      if (
        genreLowercase &&
        !m.genres.some((g) => g.toLowerCase() === genreLowercase)
      ) {
        return false;
      }
      if (minRating !== undefined && m.rating < minRating) {
        return false;
      }
      if (year !== undefined && m.year !== year) {
        return false;
      }

      return true;
    });

    const comparators: Record<SortField, (a: Movie, b: Movie) => number> = {
      title: (a, b) => a.title.localeCompare(b.title),
      year: (a, b) => a.year - b.year,
      rating: (a, b) => a.rating - b.rating,
    };
    const direction = order === 'asc' ? 1 : -1;
    filteredMovies.sort((a, b) => direction * comparators[sortBy](a, b));

    const paginationMeta = {
      page,
      limit,
      total: filteredMovies.length,
      totalPages: Math.ceil(filteredMovies.length / limit),
    };

    const offset = (page - 1) * limit;

    return {
      data: filteredMovies.slice(offset, offset + limit),
      meta: paginationMeta,
    };
  }

  findOne(id: number): Movie | undefined {
    return this.movies.find((m) => m.id === id);
  }
}
