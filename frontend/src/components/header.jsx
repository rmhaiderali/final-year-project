"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useUserContext } from "@/contexts/user-context"

export function Header() {
  const { user, setUser, setToken } = useUserContext()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary whitespace-nowrap mr-4"
        >
          Job Finder
        </Link>
        <div className="flex space-x-2">
          {user && user.isCompany && (
            <Link href="/job/new">
              <Button>Create Job</Button>
            </Link>
          )}
          {user && (
            <Link href={user.isCompany ? "/created-jobs" : "/applied-jobs"}>
              <Button>{user.isCompany ? "Posted Jobs" : "Applied Jobs"}</Button>
            </Link>
          )}
          {user && (
            <Link href="/profile">
              <Button>Profile</Button>
            </Link>
          )}
          {user && (
            <Link href="/">
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("token")
                  setToken(null)
                  setUser(null)
                }}
              >
                Log Out
              </Button>
            </Link>
          )}
          {!user && (
            <>
              <Link href="/login">
                <Button>Log In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
