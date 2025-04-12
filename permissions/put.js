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

const s = {} // replace with actual object

for (const element of elements) {
  element.children[0].children[0].click()
  await new Promise((r) => setTimeout(r, 1000))

  for (const e of document.querySelectorAll("[type=\"checkbox\"]")) {
    if (e.nextSibling.innerText === "Select all") {
      continue
    }

    if (!s.hasOwnProperty(e.name)) {
      console.log(e.name + " does not exist in provided object")
      continue
    }
    if (e.checked !== s[e.name]) e.nextSibling.click()
    delete s[e.name]
  }
}

const remaining = Object.keys(s)

if (remaining.length) console.log("these checkboxes not found: ", remaining)
