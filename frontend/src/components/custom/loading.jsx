"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function Loading() {
  return (
    <div>
      <svg className="loading mx-auto" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="14"></circle>
      </svg>
    </div>
  )
}

export function FullScreenLoading({ goto }) {
  const router = useRouter()

  useEffect(() => {
    if (goto) router.replace(goto)
  })

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <Loading />
    </div>
  )
}
