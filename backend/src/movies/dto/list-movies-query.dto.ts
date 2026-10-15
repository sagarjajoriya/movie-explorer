import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  IsIn,
  IsNumber,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import type { SortField, SortOrder } from '../movie.interface';
import { Trim } from '../../common/decorators/trim.decorator';

export class ListMoviesQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Trim()
  search?: string;

  @IsOptional()
  @IsString()
  @Trim()
  genre?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  minRating?: number;

  @IsOptional()
  @IsInt()
  @Min(1888)
  @Type(() => Number)
  year?: number;

  @IsOptional()
  @IsIn(['title', 'year', 'rating'])
  sortBy: SortField = 'title';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order: SortOrder = 'asc';

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit: number = 10;
}
