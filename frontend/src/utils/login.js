import tryCatch from "./tryCatch"

export default tryCatch(async function (data) {
  const headers = {
    "Content-Type": "application/json",
  }

  const body = JSON.stringify(data)

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND + "/api/auth/local",
    { method: "POST", headers, body }
  )

  return await response.json()
})
