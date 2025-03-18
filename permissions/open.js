let previous = null

for (const element of Array.from(temp1.children)) {
  element.children[0].children[0].click()
  await new Promise((r) => setTimeout(r, 1000))
  console.log(element.outerHTML)
  if (!previous) {
    previous = [element, element.outerHTML]
    continue
  }
  previous[0].outerHTML = previous[1]
  previous = [element, element.outerHTML]
}
