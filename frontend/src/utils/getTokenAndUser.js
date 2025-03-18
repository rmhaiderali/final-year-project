import qs from "qs"
import tryCatch from "./tryCatch"

export default tryCatch(async function () {
  const token = localStorage.getItem("token")

  if (!token) return []

  const headers = { Authorization: "Bearer " + token }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND +
      "/api/users/me?" +
      qs.stringify({
        populate: {
          appliedJobs: {
            populate: {
              creator: "*",
            },
          },
          createdJobs: {
            populate: {
              applicants: "*",
              acceptedApplicants: "*",
              rejectedApplicants: "*",
            },
          },
          cv: "*",
          acceptedJobs: "*",
          rejectedJobs: "*",
          profilePicture: "*",
        },
        status: "published",
      }),
    { headers }
  )

  const user = await response.json()

  if (user.error) {
    localStorage.removeItem("token")
    return []
  }

  return [token, user]
})
