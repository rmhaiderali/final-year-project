"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useUserContext } from "@/contexts/user-context"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import loginJson from "@/utils/login(json)"
import { FullScreenLoading } from "@/components/custom/loading"

export default function LoginPage() {
  const { user, setUser, setToken } = useUserContext()

  if (user) {
    return <FullScreenLoading goto={"/"} />
  }

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.target)
    const jsonData = Object.fromEntries(formData)

    const data = await loginJson(jsonData)

    if (data.error) {
      toast.error(data.error.message)
    } else {
      toast.success("Log in successful")
      localStorage.setItem("token", data.jwt)
      setToken(data.jwt)
      setUser(data.user)
      router.push("/")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 py-8">
        <Card className="max-w-[400px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Welcome back to JobFinder</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identifier">Username / Email</Label>
                <Input
                  id="identifier"
                  name="identifier"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
            {/* <div className="mt-4 text-center text-sm">
              <Link
                href="/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div> */}
            <div className="mt-8 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
