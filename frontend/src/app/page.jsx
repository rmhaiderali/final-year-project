"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Building2,
  GraduationCap,
  Banknote,
  Clock,
  MapPin,
  Edit,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobStatistics } from "@/components/job-statistics"
import { useEffect } from "react"
import { Loading } from "@/components/custom/loading"
import getAllJobs from "@/utils/getAllJobs"
import { toast } from "react-toastify"
import { useUserContext } from "@/contexts/user-context"
import { useRouter } from "next/navigation"
import updateJob from "@/utils/updateJob"

function getJobStatistics(jobs) {
  if (!jobs || !jobs.length)
    return { totalJobs: 0, averageSalary: 0, maxSalary: 0, minSalary: 0 }

  const salaries = jobs.map((job) => job.attributes.salary)

  const totalJobs = jobs.length

  const totalSalary = salaries.reduce((acc, salary) => acc + salary, 0)
  const averageSalary = Math.ceil(totalSalary / totalJobs)

  const maxSalary = Math.max(...salaries)
  const minSalary = Math.min(...salaries)

  return { totalJobs, averageSalary, maxSalary, minSalary }
}

export default function Home() {
  const { user, token } = useUserContext()
  const router = useRouter()

  const [jobs, setJobs] = useState(null)
  const [areJobsLoading, setAreJobsLoading] = useState(false)
  const [searchJobTitle, setSearchJobTitle] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [searchCompany, setSearchCompany] = useState("")
  const [filtersArray, setFiltersArray] = useState(
    Array.from({ length: 16 }).fill(false)
  )

  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 6
  const totalPages = Math.ceil((jobs?.data?.length || 0) / jobsPerPage)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs?.data?.slice(indexOfFirstJob, indexOfLastJob)

  const toggleFilterIndex = (index) => {
    filtersArray[index] = !filtersArray[index]
    setFiltersArray([...filtersArray])
  }

  async function fetchJobs() {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(1)

    setAreJobsLoading(true)
    const data = await getAllJobs({
      title: searchJobTitle,
      location: searchLocation,
      company: searchCompany,
      filtersArray,
    })
    setAreJobsLoading(false)

    if (data.error) {
      return toast.error(data.error.message)
    }

    setJobs(data)
  }

  useEffect(() => {
    fetchJobs()
  }, [filtersArray])

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
                <Input
                  type="text"
                  placeholder="Job Title"
                  className="w-full"
                  value={searchJobTitle}
                  onChange={(e) => setSearchJobTitle(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  className="w-full"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Company"
                  className="w-full"
                  value={searchCompany}
                  onChange={(e) => setSearchCompany(e.target.value)}
                />
                <Button
                  className="w-full bg-black hover:bg-gray-800"
                  onClick={fetchJobs}
                >
                  Search Jobs
                </Button>
              </div>

              {/* Salary Range Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Salary Range</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="salary-1"
                      checked={filtersArray[0]}
                      onClick={() => toggleFilterIndex(0)}
                    />
                    <label htmlFor="salary-1" className="text-sm select-none">
                      30 000 - 50 000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="salary-2"
                      checked={filtersArray[1]}
                      onClick={() => toggleFilterIndex(1)}
                    />
                    <label htmlFor="salary-2" className="text-sm select-none">
                      50 000 - 70 000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="salary-3"
                      checked={filtersArray[2]}
                      onClick={() => toggleFilterIndex(2)}
                    />
                    <label htmlFor="salary-3" className="text-sm select-none">
                      70 000 - 90 000 PKR
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="salary-4"
                      checked={filtersArray[3]}
                      onClick={() => toggleFilterIndex(3)}
                    />
                    <label htmlFor="salary-4" className="text-sm select-none">
                      Above 90 000 PKR
                    </label>
                  </div>
                </div>
              </div>

              {/* Education Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-semibold mb-4">Education</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edu-phd"
                      checked={filtersArray[4]}
                      onClick={() => toggleFilterIndex(4)}
                    />
                    <label htmlFor="edu-phd" className="text-sm select-none">
                      Ph.D.
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edu-master"
                      checked={filtersArray[5]}
                      onClick={() => toggleFilterIndex(5)}
                    />
                    <label htmlFor="edu-master" className="text-sm select-none">
                      Master
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edu-bachelor"
                      checked={filtersArray[6]}
                      onClick={() => toggleFilterIndex(6)}
                    />
                    <label
                      htmlFor="edu-bachelor"
                      className="text-sm select-none"
                    >
                      Bachelor
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edu-intermediate"
                      checked={filtersArray[7]}
                      onClick={() => toggleFilterIndex(7)}
                    />
                    <label
                      htmlFor="edu-intermediate"
                      className="text-sm select-none"
                    >
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
                    <Checkbox
                      id="type-permanent"
                      checked={filtersArray[8]}
                      onClick={() => toggleFilterIndex(8)}
                    />
                    <label
                      htmlFor="type-permanent"
                      className="text-sm select-none"
                    >
                      Permanent
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="type-contract"
                      checked={filtersArray[9]}
                      onClick={() => toggleFilterIndex(9)}
                    />
                    <label
                      htmlFor="type-contract"
                      className="text-sm select-none"
                    >
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="type-fulltime"
                      checked={filtersArray[10]}
                      onClick={() => toggleFilterIndex(10)}
                    />
                    <label
                      htmlFor="type-fulltime"
                      className="text-sm select-none"
                    >
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="type-parttime"
                      checked={filtersArray[11]}
                      onClick={() => toggleFilterIndex(11)}
                    />
                    <label
                      htmlFor="type-parttime"
                      className="text-sm select-none"
                    >
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
                    <Checkbox
                      id="exp-1"
                      checked={filtersArray[12]}
                      onClick={() => toggleFilterIndex(12)}
                    />
                    <label htmlFor="exp-1" className="text-sm select-none">
                      1 to 2 year
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-2"
                      checked={filtersArray[13]}
                      onClick={() => toggleFilterIndex(13)}
                    />
                    <label htmlFor="exp-2" className="text-sm select-none">
                      3 to 5 years
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-3"
                      checked={filtersArray[14]}
                      onClick={() => toggleFilterIndex(14)}
                    />
                    <label htmlFor="exp-3" className="text-sm select-none">
                      5 to 9 years
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-5"
                      checked={filtersArray[15]}
                      onClick={() => toggleFilterIndex(15)}
                    />
                    <label htmlFor="exp-5" className="text-sm select-none">
                      10+ years
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings and Statistics */}
            <div className="lg:col-span-3 space-y-6">
              {areJobsLoading ? (
                <div className="p-32">
                  <Loading />
                </div>
              ) : jobs?.data?.length ? (
                <>
                  {/* Job Statistics */}
                  <JobStatistics {...getJobStatistics(jobs?.data)} />

                  {/* Job Listings */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentJobs?.map((job) => {
                      const applicants = job.attributes.applicants.data.map(
                        (applicant) => applicant.id
                      )

                      const acceptedApplicants =
                        job.attributes.acceptedApplicants.data.map(
                          (applicant) => applicant.id
                        )

                      const rejectedApplicants =
                        job.attributes.rejectedApplicants.data.map(
                          (applicant) => applicant.id
                        )

                      let currentUserStatus = "notapplied"

                      if (applicants.includes(user?.id))
                        currentUserStatus = "applied"

                      if (acceptedApplicants.includes(user?.id))
                        currentUserStatus = "accepted"

                      if (rejectedApplicants.includes(user?.id))
                        currentUserStatus = "rejected"

                      const color = {
                        applied: "bg-yellow-500 hover:bg-yellow-500 text-white",
                        accepted: "bg-green-600 hover:bg-green-600  text-white",
                        rejected: "bg-red-500 hover:bg-red-500 text-white",
                      }[currentUserStatus]

                      const isExpired =
                        new Date(job.attributes.deadline) <
                        new Date(new Date().toDateString())

                      return (
                        <Card key={job.id} className="border-0 shadow-sm">
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg">
                                  {job.attributes.title}
                                </h3>
                                <div>
                                  {currentUserStatus !== "notapplied" && (
                                    <span
                                      className={
                                        "text-xs px-2.5 py-0.5 rounded mr-2 whitespace-nowrap " +
                                        color
                                      }
                                    >
                                      {currentUserStatus
                                        .charAt(0)
                                        .toLocaleUpperCase() +
                                        currentUserStatus.slice(1)}
                                    </span>
                                  )}
                                  <span className="bg-zinc-200 text-zinc-800 text-xs px-2.5 py-0.5 rounded whitespace-nowrap">
                                    {job.attributes.type}
                                  </span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center text-muted-foreground">
                                  <Building2 className="h-4 w-4 mr-2" />
                                  <span>
                                    Company:{" "}
                                    {
                                      job.attributes.creator.data.attributes
                                        .name
                                    }
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  <span>
                                    Location:{" "}
                                    {
                                      job.attributes.creator.data.attributes
                                        .address
                                    }
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <GraduationCap className="h-4 w-4 mr-2" />
                                  <span>
                                    Education: {job.attributes.education}
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Banknote className="h-4 w-4 mr-2" />
                                  <span>
                                    Salary: {job.attributes.salary} PKR
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-2" />
                                  <span>
                                    Apply before:{" "}
                                    {new Date(
                                      job.attributes.deadline
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex gap-2">
                            {!user?.isCompany &&
                              currentUserStatus === "notapplied" && (
                                <Button
                                  className="w-full bg-black hover:bg-zinc-800"
                                  onClick={async (e) => {
                                    e.target.disabled = true
                                    e.target.innerHTML = "Applying"
                                    if (!user) return router.push("/login")

                                    const data = await updateJob(
                                      token,
                                      { applicants: [...applicants, user?.id] },
                                      job.id
                                    )
                                    job.attributes = data.data.attributes
                                    setJobs({ ...jobs })
                                  }}
                                  disabled={isExpired}
                                >
                                  {isExpired ? "Expired" : "Apply Now"}
                                </Button>
                              )}
                            {user?.id === job.attributes.creator.data.id && (
                              <Link
                                href={"/job/" + job.id + "/edit"}
                                className="w-full"
                              >
                                <Button variant="outline" className="w-full">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit Job
                                </Button>
                              </Link>
                            )}
                            <Link href={"/job/" + job.id} className="w-full">
                              <Button variant="outline" className="w-full">
                                View Details
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Updated Pagination */}
                  <div className="flex justify-center mt-8">
                    <nav className="inline-flex rounded-md shadow p-2 bg-white">
                      <Button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="select-none px-3 py-2 rounded-l-md"
                      >
                        First
                      </Button>
                      <Button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="select-none px-3 py-2 ml-2"
                      >
                        Last
                      </Button>
                      <div className="flex items-center justify-center px-3 ml-2 w-[100px] select-none">
                        {currentPage}/{totalPages}
                      </div>
                      <Button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="select-none px-3 py-2 ml-2"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="select-none px-3 py-2 ml-2 rounded-r-md"
                      >
                        Next
                      </Button>
                    </nav>
                  </div>
                </>
              ) : (
                <div className="text-center p-32">
                  <p>No Jobs Found</p>
                  <p>Try searching something else</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
