import tryCatch from "./tryCatch"

export default tryCatch(async function (id) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/jobs/" + id + "?populate=*"
  )

  return await response.json()
})
