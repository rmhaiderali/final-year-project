"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, User } from "lucide-react"
import Link from "next/link"
import { useUserContext } from "@/contexts/user-context"
import { FullScreenLoading } from "@/components/custom/loading"

export default function SignUpTypePage() {
  const { user } = useUserContext()

  if (user) {
    return <FullScreenLoading goto={"/"} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 py-8 max-w-[800px]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Choose Account Type</h1>
          <p className="text-muted-foreground mt-2">
            Select how you want to use JobFinder
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/signup/company" className="block">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader className="text-center pb-2">
                <Building2 className="w-12 h-12 mx-auto mb-2" />
                <CardTitle>Company</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  Post jobs and find the perfect candidates for your company
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/signup/candidate" className="block">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader className="text-center pb-2">
                <User className="w-12 h-12 mx-auto mb-2" />
                <CardTitle>Job Seeker</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Find your dream job and connect with top employers</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
