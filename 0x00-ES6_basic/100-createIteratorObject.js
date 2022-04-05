export default function createIteratorObject(report) {
  const arrays = Object.values(report)
  const ar = []
  for (const arr of arrays) {
    return ar.push(...arr)
  }
}
