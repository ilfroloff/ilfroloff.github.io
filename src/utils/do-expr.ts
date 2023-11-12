export default function doExpr<T>(fn: () => T): T {
  return fn();
}
