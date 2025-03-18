import tryCatch from "./tryCatch"

export default tryCatch(async function (username) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND +
      "/api/users?populate=*&filters[username][$eq]=" +
      username
  )

  return await response.json()
})
