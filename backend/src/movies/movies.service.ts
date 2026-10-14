import { Injectable } from '@nestjs/common';
import { Movie } from './movie.interface';
import { MOVIES_LIST } from './movies.data';

@Injectable()
export class MoviesService {
  private readonly movies: readonly Movie[] = MOVIES_LIST;

  findAll(): readonly Movie[] {
    return this.movies;
  }

  findOne(id: number): Movie | undefined {
    return this.movies.find((m) => m.id === id);
  }
}
