import { ApiError } from './api-error';

export function getErrorMessage(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.status >= 500) {
      return 'Server is not responding. Please try again later.';
    }
    if (err.status === 404) {
      return 'The requested data was not found.';
    }
    return err.message; // 4xx: server message
  }

  if (err instanceof TypeError) {
    return 'Network error. Please check your connection.';
  }

  return 'Something went wrong. Please try again.';
}
