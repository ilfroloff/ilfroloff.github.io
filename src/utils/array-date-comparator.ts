type Comparator<T> = (a: T, b: T) => number;

export default function arrayDateComparator<T>(
  pickDate: (item: T) => Date,
  direction = -1,
): Comparator<T> {
  return (a: T, b: T) =>
    direction * (pickDate(a).valueOf() - pickDate(b).valueOf());
}
