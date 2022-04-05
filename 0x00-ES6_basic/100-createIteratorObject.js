export default function createIteratorObject(report) {
  for (const obj in report.allEmployees) {
    return Object.values(obj)
  }
}
