"use client"
import { useUserContext } from "@/contexts/user-context"
import { FullScreenLoading } from "@/components/custom/loading"

export default function UserLoader({ children }) {
  const { isUserLoaded } = useUserContext()

  return isUserLoaded ? children : <FullScreenLoading />
}
