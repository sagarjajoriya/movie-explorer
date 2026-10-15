import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ListMoviesQueryDto } from './dto/list-movies-query.dto';
import type { Movie } from './movie.interface';
import type { Paginated } from '../common/interfaces/paginated.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(@Query() query: ListMoviesQueryDto): Paginated<Movie> {
    return this.moviesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Movie {
    const movie = this.moviesService.findOne(id);

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    return movie;
  }
}
