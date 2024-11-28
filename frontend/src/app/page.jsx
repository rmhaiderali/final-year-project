"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Building2, GraduationCap, Banknote, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobStatistics } from "@/components/job-statistics"
//
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import getTokenAndUser from "@/utils/getTokenAndUser"
import Loading from "@/utils/components/Loading"
import getAllJobs from "@/utils/getAllJobs"
import { toast } from "react-toastify"

// Mock data for job statistics
const jobStats = {
  totalJobs: 5000,
  averageSalary: 45000,
  maxSalary: 150000,
  minSalary: 20000,
}

export default function Home() {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [JWT, setJWT] = useState("")
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function init() {
      const [token, userdata] = await getTokenAndUser()
      if (!token) return router.replace("/login")

      setJWT(token)
      setUser(userdata)

      const data = await getAllJobs(token)

      if (data.error) {
        return toast.error(data.error.message)
      }

      setJobs(data.data)
    }

    init()
  }, [])

  if (!user || !jobs)
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Loading />
        <Footer />
      </div>
    )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-6">Find Your Dream Job</h1>
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar with Search and Filters */}
            <div className="space-y-4">
              {/* Search inputs */}
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <Input type="text" placeholder="Job Title" className="w-full" />
                <Input type="text" placeholder="Location" className="w-full" />
                <Button className="w-full bg-black hover:bg-gray-800">
                  Search Jobs
                </Button>
              </div>

              {/* Salary Range Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Salary Range</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salary-1" />
                    <label htmlFor="salary-1" className="text-sm">
                      20,000 - 30,000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salary-2" />
                    <label htmlFor="salary-2" className="text-sm">
                      30,000 - 40,000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salary-3" />
                    <label htmlFor="salary-3" className="text-sm">
                      40,000 - 50,000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salary-4" />
                    <label htmlFor="salary-4" className="text-sm">
                      Above 50,000 PKR
                    </label>
                  </div>
                </div>
              </div>

              {/* Education Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Education</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edu-phd" />
                    <label htmlFor="edu-phd" className="text-sm">
                      Ph.D.
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edu-master" />
                    <label htmlFor="edu-master" className="text-sm">
                      Master
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edu-bachelor" />
                    <label htmlFor="edu-bachelor" className="text-sm">
                      Bachelor
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edu-intermediate" />
                    <label htmlFor="edu-intermediate" className="text-sm">
                      Intermediate
                    </label>
                  </div>
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Job Type</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-permanent" />
                    <label htmlFor="type-permanent" className="text-sm">
                      Permanent
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-contract" />
                    <label htmlFor="type-contract" className="text-sm">
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-fulltime" />
                    <label htmlFor="type-fulltime" className="text-sm">
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-parttime" />
                    <label htmlFor="type-parttime" className="text-sm">
                      Part Time
                    </label>
                  </div>
                </div>
              </div>

              {/* Experience Required Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Experience Required</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-1" />
                    <label htmlFor="exp-1" className="text-sm">
                      1 year
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-2" />
                    <label htmlFor="exp-2" className="text-sm">
                      2 years
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-3" />
                    <label htmlFor="exp-3" className="text-sm">
                      3 years
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-5" />
                    <label htmlFor="exp-5" className="text-sm">
                      5+ years
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings and Statistics */}
            <div className="lg:col-span-3 space-y-6">
              {/* Job Statistics */}
              <JobStatistics {...jobStats} />

              {/* Job Listings */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Job Card 1 */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">
                          Software Engineer
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded">
                          Permanent
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span>Industry: Banking</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          <span>Education Required: Bachelor</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Banknote className="h-4 w-4 mr-2" />
                          <span>Salary: 30000 PKR</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Last Date to Apply: June 30, 2023</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="w-full bg-black hover:bg-gray-800">
                      Apply Now
                    </Button>
                    <Link href="/jobs/1" className="w-full">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Job Card 2 */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">
                          Business Analyst
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded">
                          Permanent
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span>Industry: Business</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          <span>Education Required: Bachelor</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Banknote className="h-4 w-4 mr-2" />
                          <span>Salary: 30000 PKR</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Last Date to Apply: July 15, 2023</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="w-full bg-black hover:bg-gray-800">
                      Apply Now
                    </Button>
                    <Link href="/jobs/2" className="w-full">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
