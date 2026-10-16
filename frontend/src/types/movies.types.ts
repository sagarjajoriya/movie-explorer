export interface Movie {
  readonly id: number;
  readonly title: string;
  readonly year: number;
  readonly genres: readonly string[];
  readonly rating: number;
  readonly overview: string;
}
