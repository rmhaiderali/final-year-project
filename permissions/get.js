function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
}

const text = "Only actions bound by a route are listed below."

const elements = Array.from(
  getElementByXpath("//*[contains(text(),\"" + text + "\")]").parentElement
    .nextSibling.children[0].children
)

let previous = null

for (const element of elements) {
  element.children[0].children[0].click()
  await new Promise((r) => setTimeout(r, 1000))
  if (!previous) {
    previous = [element, element.outerHTML]
    continue
  }
  previous[0].outerHTML = previous[1]
  previous = [element, element.outerHTML]
}

Object.fromEntries(
  Array.from(document.querySelectorAll("[type=\"checkbox\"]"))
    .filter((e) => e.nextSibling.innerText !== "Select all")
    .map((e) => [e.name, e.checked])
)
