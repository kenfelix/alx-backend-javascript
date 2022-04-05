export default function createIteratorObject(report) {
  for (let obj of report) {
    return Object.values(obj)
  }
}
