export interface Movie {
  readonly id: number;
  readonly title: string;
  readonly year: number;
  readonly genres: readonly string[];
  readonly rating: number;
  readonly overview: string;
}

export type SortField = 'title' | 'year' | 'rating';
export type SortOrder = 'asc' | 'desc';

export interface FindMovieOptions {
  search?: string;
  genre?: string;
  minRating?: number;
  year?: number;
  sortBy: SortField;
  order: SortOrder;
  page: number;
  limit: number;
}
