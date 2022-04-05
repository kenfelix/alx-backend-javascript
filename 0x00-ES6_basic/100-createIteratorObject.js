export default function createIteratorObject(report) {
  for (let x of report) {
    return Object.values(x);
  }
}
