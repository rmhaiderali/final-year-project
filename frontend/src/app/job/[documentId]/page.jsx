"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Factory,
  Building2,
  GraduationCap,
  Banknote,
  Calendar,
  MapPin,
  Clock,
  Users,
  Edit,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import getJob from "@/utils/getJob"
import { Loading } from "@/components/custom/loading"
import { useUserContext } from "@/contexts/user-context"
import updateJob from "@/utils/updateJob"
import { useRouter } from "next/navigation"

export default function JobDetailPage({ params }) {
  const router = useRouter()
  const { user, token } = useUserContext()

  const [job, setJob] = useState({})
  const [isLoadingJob, setIsLoadingJob] = useState(true)

  async function fetchJob() {
    const response = await getJob(params.documentId)
    if (!response) return router.replace("/")

    setJob(response.data)
    setIsLoadingJob(false)
  }

  useEffect(() => {
    fetchJob()
  }, [])

  const applicants =
    job.applicants?.map((applicant) => applicant.documentId) || []

  const acceptedApplicants =
    job.acceptedApplicants?.map((applicant) => applicant.documentId) || []

  const rejectedApplicants =
    job.rejectedApplicants?.map((applicant) => applicant.documentId) || []

  let currentUserStatus = "notapplied"

  if (applicants.includes(user?.documentId)) currentUserStatus = "applied"

  if (acceptedApplicants.includes(user?.documentId))
    currentUserStatus = "accepted"

  if (rejectedApplicants.includes(user?.documentId))
    currentUserStatus = "rejected"

  const color = {
    applied: "bg-yellow-100 hover:bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 hover:bg-green-100 text-green-800",
    rejected: "bg-red-100 hover:bg-red-100 text-red-800",
  }[currentUserStatus]

  function getMediaURL(media) {
    if (!media || !media.url) return ""
    const backend = process.env.NEXT_PUBLIC_BACKEND
    return (media.url.startsWith("/") ? backend : "") + media.url
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {isLoadingJob ? (
        <div className="min-h-[67vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <main className="flex-grow bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                    <p className="text-lg text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                  <div>
                    {currentUserStatus !== "notapplied" && (
                      <Badge
                        variant="secondary"
                        className={"text-sm mr-4 " + color}
                      >
                        {currentUserStatus.charAt(0).toLocaleUpperCase() +
                          currentUserStatus.slice(1)}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="text-sm">
                      {job.type}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Company:</span>
                    <Link
                      href={"/profile/" + job.creator.username}
                      className="flex items-center gap-1 ml-1"
                    >
                      {" " + job.creator.name}
                      <Image
                        src="/external-link.svg"
                        width={16}
                        height={16}
                        alt="External link"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Location: {job.creator.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Factory className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Industry: {job.industry}</span>
                  </div>
                  <div className="flex items-center">
                    <Banknote className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Salary: {job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>
                      Experience Required: {job.experience} years or more
                    </span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Education Required: {job.education}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>
                      Posted on: {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>
                      Apply before:{" "}
                      {new Date(job.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {job.images && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Job Images</h2>
                    <Carousel className="w-full max-w-xl mx-auto">
                      <CarouselContent className="items-center">
                        {job.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                  <Image
                                    src={getMediaURL(image)}
                                    alt={"Company image " + (index + 1)}
                                    width={600}
                                    height={400}
                                    className="rounded-md object-cover"
                                  />
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}

                {job.description && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Job Description
                    </h2>
                    <p>{job.description}</p>
                  </div>
                )}

                <div className="mt-6 flex gap-4">
                  {!user?.isCompany &&
                    currentUserStatus === "notapplied" &&
                    // Check if the deadline is passed
                    new Date(job.deadline) >=
                      new Date(new Date().toDateString()) && (
                      <Button
                        className="w-full md:w-auto bg-black hover:bg-gray-800"
                        onClick={async (e) => {
                          e.target.disabled = true
                          e.target.innerHTML = "Applying"
                          if (!user) return router.push("/login")

                          const response = await updateJob(
                            token,
                            { applicants: [...applicants, user?.documentId] },
                            params.documentId
                          )

                          user.appliedJobs.push(response.data)
                          setJob(response.data)
                        }}
                      >
                        Apply Now
                      </Button>
                    )}
                  {user?.documentId === job.creator?.documentId && (
                    <Link
                      href={"/job/" + params.documentId + "/edit"}
                      className="w-full md:w-auto"
                    >
                      <Button variant="outline" className="w-full">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Job
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </main>
      )}
      <Footer />
    </div>
  )
}
