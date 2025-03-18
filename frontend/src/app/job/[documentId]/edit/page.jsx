"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loading } from "@/components/custom/loading"
import getJob from "@/utils/getJob"
import updateJob from "@/utils/updateJob"
import { useUserContext } from "@/contexts/user-context"
import { toast } from "react-toastify"
import { FullScreenLoading } from "@/components/custom/loading"

export default function EditJobPage({ params }) {
  const router = useRouter()

  const { user, token } = useUserContext()

  if (!user) {
    return <FullScreenLoading goto={"/"} />
  }

  const [job, setJob] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingJob, setIsLoadingJob] = useState(true)

  const handleInputChange = (e) => {
    setJob((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function fetchJob() {
    const response = await getJob(params.documentId)
    if (!response) return

    setJob(response.data)
    setIsLoadingJob(false)
  }

  useEffect(() => {
    fetchJob()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // console.log("job", job)

    const newJob = {
      title: job.title,
      type: job.type,
      education: job.education,
      industry: job.industry,
      salary: job.salary,
      experience: job.experience,
      description: job.description,
      deadline: job.deadline,
    }
    await updateJob(token, newJob, params.documentId)
    toast.success("Job updated successfully")
    router.push("/job/" + params.documentId)

    setIsLoading(false)
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
          <div className="container mx-auto px-4 max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Edit Job Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. Senior Software Engineer"
                      value={job.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type</Label>
                    <Select
                      name="type"
                      value={job.type}
                      onValueChange={(value) =>
                        handleInputChange({
                          target: { name: "type", value },
                        })
                      }
                      required
                    >
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Permanent">Permanent</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Full Time">Full Time</SelectItem>
                        <SelectItem value="Part Time">Part Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select
                      name="industry"
                      value={job.industry}
                      onValueChange={(value) =>
                        handleInputChange({
                          target: { name: "industry", value },
                        })
                      }
                      required
                    >
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Banking">Banking</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Telecommunication">
                          Telecommunication
                        </SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary</Label>
                    <Input
                      id="salary"
                      name="salary"
                      type="number"
                      placeholder="e.g. 80000"
                      value={job.salary}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      Experience Required (Years)
                    </Label>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="e.g. 5"
                      value={job.experience}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Required</Label>
                    <Select
                      name="education"
                      value={job.education}
                      onValueChange={(value) =>
                        handleInputChange({
                          target: { name: "education", value },
                        })
                      }
                      required
                    >
                      <SelectTrigger id="education">
                        <SelectValue placeholder="Select required education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                        <SelectItem value="Master">Master</SelectItem>
                        <SelectItem value="Bachelor">Bachelor</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Briefly describe the job role"
                      value={job.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input
                      id="deadline"
                      name="deadline"
                      type="date"
                      value={job.deadline}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Updating Job" : "Update Job"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      )}
      <Footer />
    </div>
  )
}
