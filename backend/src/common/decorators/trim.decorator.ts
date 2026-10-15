import { Transform } from 'class-transformer';
import { trimString } from '../utils/trim-string';

export const Trim = (): PropertyDecorator =>
  Transform(({ value }: { value: unknown }) => trimString(value));
