import { toast } from "react-toastify"

export default function (callable) {
  return async function (...parameters) {
    try {
      const response = await callable(...parameters)
      if (response.error) throw new Error(response.error.message)
      return response
    } catch (error) {
      toast.error(
        error.message === "Failed to fetch"
          ? "Error while connecting to server"
          : error.message
      )
    }
  }
}
