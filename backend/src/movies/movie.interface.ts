export interface Movie {
  readonly id: number;
  readonly title: string;
  readonly year: number;
  readonly genres: readonly string[];
  readonly rating: number;
  readonly overview: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedMovies {
  data: readonly Movie[];
  meta: PaginationMeta;
}
