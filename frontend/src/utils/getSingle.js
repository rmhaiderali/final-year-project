import tryCatch from "./tryCatch"

export default tryCatch(async function (single) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/" + single
  )

  return await response.json()
})
