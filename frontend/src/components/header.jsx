import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          JobFinder
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/dashboard/created-jobs"
                className="hover:text-primary"
              >
                Posted Jobs
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-primary">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
