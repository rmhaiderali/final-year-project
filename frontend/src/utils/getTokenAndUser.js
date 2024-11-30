import tryCatch from "./tryCatch"

export default tryCatch(async function () {
  const token = localStorage.getItem("token")

  if (!token) return []

  const headersList = { Authorization: "Bearer " + token }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_ORIGIN +
      "/api/users/me" +
      "?populate[appliedJobs][populate][creator]=*" +
      "&populate[createdJobs][populate][applicants]=*" +
      "&populate[createdJobs][populate][acceptedApplicants]=*" +
      "&populate[createdJobs][populate][rejectedApplicants]=*" +
      "&populate[acceptedJobs]=*" +
      "&populate[rejectedJobs]=*" +
      "&populate[cv]=*" +
      "&populate[profilePicture]=*",
    { headers: headersList }
  )

  const data = await response.json()

  if (data.error) {
    localStorage.removeItem("token")
    return []
  }

  return [token, data]
})
