const MOVIE_ID_PATTERN = /^[1-9]\d*$/;

export function parseMovieId(raw: string | undefined): number | null {
  if (!raw || !MOVIE_ID_PATTERN.test(raw)) return null;
  const id = Number(raw);
  return Number.isSafeInteger(id) ? id : null; // rejects digit strings too large to represent exactly
}
