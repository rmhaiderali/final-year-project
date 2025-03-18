import tryCatch from "./tryCatch"

export default tryCatch(async function (token, data, id) {
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  }

  const body = JSON.stringify({ data })

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/jobs/" + id + "?populate=*",
    { method: "PUT", headers, body }
  )

  return await response.json()
})
