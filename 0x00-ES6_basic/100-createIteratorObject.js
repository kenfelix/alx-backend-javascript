export default function createIteratorObject(report) {
  const b = report.allEmployees
  const y = Object.values(b)
  const arr = [];
  for (const x of y) {
    for (const z of x) {
      arr.push(z);
    }
  }
  return arr;
}
