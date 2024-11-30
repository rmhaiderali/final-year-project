import tryCatch from "./tryCatch"

export default tryCatch(async function (token, data, id) {
  let headersList = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  }

  let bodyContent = JSON.stringify({ data })

  let response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_ORIGIN + "/api/jobs/" + id + "?populate=*",
    {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    }
  )

  return await response.json()
})
