import type { Movie } from '../types/movies.types';
import type { Paginated } from '../types/pagination.types';

import { ApiError } from './api-error';

async function toApiError(response: Response): Promise<ApiError> {
  const fallback = `Request failed with status ${response.status}`;

  let body: unknown;
  try {
    body = JSON.parse(await response.text());
  } catch {
    return new ApiError(response.status, fallback);
  }

  if (typeof body !== 'object' || body === null || !('message' in body)) {
    return new ApiError(response.status, fallback);
  }

  const { message } = body;
  if (Array.isArray(message)) {
    return new ApiError(response.status, message.join(', '));
  }
  if (typeof message === 'string' && message !== '') {
    return new ApiError(response.status, message);
  }
  return new ApiError(response.status, fallback);
}

export async function getMovies(
  signal?: AbortSignal,
): Promise<Paginated<Movie>> {
  const response = await fetch('/api/movies', { signal });

  if (!response.ok) {
    throw await toApiError(response);
  }

  return response.json() as Promise<Paginated<Movie>>;
}

export async function getMovieDetail(
  id: number,
  signal?: AbortSignal,
): Promise<Movie> {
  const response = await fetch(`/api/movies/${id}`, { signal });

  if (!response.ok) {
    throw await toApiError(response);
  }

  return response.json() as Promise<Movie>;
}
