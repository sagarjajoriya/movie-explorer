import { Injectable } from '@nestjs/common';
import { Movie, PaginatedMovies } from './movie.interface';
import { MOVIES_LIST } from './movies.data';
import { ListMoviesQueryDto } from './dto/list-movies-query.dto';
import { filter } from 'rxjs';

@Injectable()
export class MoviesService {
  private readonly movies: readonly Movie[] = MOVIES_LIST;

  findAll(query: ListMoviesQueryDto): PaginatedMovies {
    const { search, genre, minRating, year, sortBy, order, page, limit } =
      query;

    const filteredMovies = this.movies.filter((m: Movie) => {
      const searchSet: boolean[] = [];
      if (search) {
        searchSet.push(
          m.title.toLowerCase().includes(search.trim().toLowerCase()),
        );
      }
      if (genre) {
        searchSet.push(m.genres.includes(genre));
      }
      if (minRating) {
        searchSet.push(m.rating >= minRating);
      }
      if (year) {
        searchSet.push(m.year === year);
      }

      return searchSet.every((s) => !!s);
    });

    if (sortBy) {
      filteredMovies.sort((a, b) =>
        order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy],
      );
    }

    const paginationMeta = {
      page,
      limit,
      total: filteredMovies.length,
      totalPages: Math.ceil(filteredMovies.length / limit),
    };
    const paginatedData = filteredMovies.slice(
      page * limit - limit,
      page * limit,
    );

    return {
      data: paginatedData,
      meta: paginationMeta,
    };
  }

  findOne(id: number): Movie | undefined {
    return this.movies.find((m) => m.id === id);
  }
}
