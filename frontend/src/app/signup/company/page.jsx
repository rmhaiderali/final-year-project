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
import { FullScreenLoading } from "@/components/custom/loading"
import signup from "@/utils/signup"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import getTokenAndUser from "@/utils/getTokenAndUser"

export default function CompanySignUpPage() {
  const { user, setToken, setUser } = useUserContext()

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

    if (jsonData.password !== jsonData.confirmPassword) {
      setIsLoading(false)
      return toast.error("Passwords do not match")
    }

    delete jsonData.confirmPassword
    jsonData.isCompany = true

    const response = await signup(jsonData)
    if (!response) return setIsLoading(false)

    localStorage.setItem("token", response.jwt)

    const [token, user] = (await getTokenAndUser()) || []
    setToken(token)
    setUser(user)

    toast.success("Sign up successful")
    router.push("/")

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 py-8">
        <Card className="max-w-[600px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Company Account</CardTitle>
            <CardDescription>
              Start hiring the best talent with Job Finder
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter company username"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter company email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter company phone number"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Enter company address"
                  required
                />
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://example.com"
                  required
                />
              </div> */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full mt-[30px!important]"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account" : "Create Account"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
