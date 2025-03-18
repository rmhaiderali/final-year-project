export default function convert(object) {
  if (typeof object !== "object" || object === null) return object

  if (Array.isArray(object)) return object.map((item) => convert(item))

  if (Object.keys(object).length === 1 && "data" in object)
    return convert(object.data)

  const newObject = {}

  for (const key in object) {
    if (key === "attributes") Object.assign(newObject, convert(object[key]))
    else newObject[key] = convert(object[key])
  }

  return newObject
}
