import tryCatch from "./tryCatch"

export default tryCatch(async function (token, files) {
  const headers = {
    Authorization: "Bearer " + token,
  }

  const body = new FormData()

  for (const file of files) body.append("files", file)

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/upload",
    { method: "POST", headers, body }
  )

  return await response.json()
})
