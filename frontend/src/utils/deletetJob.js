import tryCatch from "./tryCatch"

export default tryCatch(async function (id, token) {
  const headers = {
    Authorization: "Bearer " + token,
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/jobs/" + id,
    { method: "DELETE", headers }
  )

  return response.status === 204
})
