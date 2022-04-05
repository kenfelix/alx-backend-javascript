export default function createIteratorObject(report) {
  for (const obj of report.allEmployees) {
    return Object.values(obj)
  }
}
