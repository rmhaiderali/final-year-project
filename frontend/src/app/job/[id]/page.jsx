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
import { toast } from "react-toastify"

export default function JobDetailPage({ params }) {
  const router = useRouter()
  const { user, token } = useUserContext()

  const [job, setJob] = useState({})
  const [isLoadingJob, setIsLoadingJob] = useState(true)

  async function fetchJob() {
    const res = await getJob(params.id)
    if (res.error) {
      toast.error(res.error.message)
      return
    }
    setJob(res.data.attributes)
    setIsLoadingJob(false)
  }

  useEffect(() => {
    fetchJob()
  }, [])

  const applicants = job.applicants?.data.map((applicant) => applicant.id) || []

  const acceptedApplicants =
    job.acceptedApplicants?.data.map((applicant) => applicant.id) || []

  const rejectedApplicants =
    job.rejectedApplicants?.data.map((applicant) => applicant.id) || []

  let currentUserStatus = "notapplied"

  if (applicants.includes(user?.id)) currentUserStatus = "applied"

  if (acceptedApplicants.includes(user?.id)) currentUserStatus = "accepted"

  if (rejectedApplicants.includes(user?.id)) currentUserStatus = "rejected"

  const color = {
    applied: "bg-yellow-100 hover:bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 hover:bg-green-100 text-green-800",
    rejected: "bg-red-100 hover:bg-red-100 text-red-800",
  }[currentUserStatus]

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
                    <span>Company: {job.creator.data.attributes.name}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Location: {job.creator.data.attributes.address}</span>
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

                {job.description && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Job Description
                    </h2>
                    <p>{job.description}</p>
                  </div>
                )}

                {job.images?.data && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Company Images
                    </h2>
                    <Carousel className="w-full max-w-xl mx-auto">
                      <CarouselContent>
                        {job.images.data.map((src, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                  <Image
                                    src={src}
                                    alt={`Company image ${index + 1}`}
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

                <div className="mt-6 flex gap-4">
                  {!user?.isCompany && currentUserStatus === "notapplied" && (
                    <Button
                      className="w-full md:w-auto bg-black hover:bg-gray-800"
                      onClick={async (e) => {
                        e.target.disabled = true
                        e.target.innerHTML = "Applying"
                        if (!user) return router.push("/login")

                        const data = await updateJob(
                          token,
                          { applicants: [...applicants, user?.id] },
                          params.id
                        )

                        setJob(data.data.attributes)
                      }}
                    >
                      Apply Now
                    </Button>
                  )}
                  {user?.id === job.creator?.data.id && (
                    <Link
                      href={"/job/" + params.id + "/edit"}
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
