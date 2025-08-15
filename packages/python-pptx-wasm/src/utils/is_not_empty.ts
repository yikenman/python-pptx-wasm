export function is_not_empty<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}
