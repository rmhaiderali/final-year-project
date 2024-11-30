import tryCatch from "./tryCatch"

export default tryCatch(async function (id) {
  let response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_ORIGIN + "/api/jobs/" + id + "?populate=*"
  )

  return await response.json()
})
