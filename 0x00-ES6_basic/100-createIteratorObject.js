export default function createIteratorObject(report) {
  for (let obj of report.allEmployees) {
    return Object.values(obj)
  }
}
