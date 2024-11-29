"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useUserContext } from "@/contexts/user-context"

export function Header() {
  const { user, setUser, setToken } = useUserContext()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          JobFinder
        </Link>
        <nav>
          {user && (
            <ul className="flex space-x-4">
              {user.isCompany && (
                <li>
                  <Link href="/job/new" className="hover:text-primary">
                    Create Job
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={user.isCompany ? "/created-jobs" : "/applied-jobs"}
                  className="hover:text-primary"
                >
                  {user.isCompany ? "Posted Jobs" : "Applied Jobs"}
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <div className="flex space-x-2">
          {user ? (
            <Link href="/login">
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
          ) : (
            <>
              <Link href="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button>Log In</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
