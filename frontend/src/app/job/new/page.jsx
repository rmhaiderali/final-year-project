"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import postJobJson from "@/utils/postJob"
import { toast } from "react-toastify"
import { useUserContext } from "@/contexts/user-context"
import { FullScreenLoading } from "@/components/custom/loading"
import Image from "next/image"
import uploadFiles from "@/utils/uploadFiles"

export default function CreateJobPage() {
  // const router = useRouter()
  const { token, user } = useUserContext()

  if (!user || !user.isCompany) {
    return <FullScreenLoading goto={"/"} />
  }

  const [isLoading, setIsLoading] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])

  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files || [])
    e.target.value = ""

    setSelectedImages((prevFiles) => {
      const uniqueFiles = newFiles.filter((newFile) =>
        prevFiles.every(
          (prevFile) =>
            prevFile.name !== newFile.name && prevFile.size !== newFile.size
        )
      )
      return [...prevFiles, ...uniqueFiles].slice(0, 4)
    })
  }

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  console.log("use fill() to auto fill job")
  window.fill = () =>
    Object.entries({
      title: new Date().toTimeString().split(" ")[0],
      type: "Contract",
      industry: "Business",
      salary: "49999",
      experience: "6",
      education: "Intermediate",
      description: "This is a test job description",
      deadline: "2025-01-14",
    }).forEach(
      ([key, value]) =>
        (jobForm.querySelector("[name=" + key + "]").value = value)
    )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const data = Object.fromEntries(new FormData(e.target))

    if (data.salary < 30000) {
      return toast.warn("Salary must be more than 30,000")
    }

    data.creator = user.documentId

    if (selectedImages.length) {
      const uploadedImages = await uploadFiles(token, selectedImages)
      data.images = uploadedImages.map((img) => img.id)
    }

    const response = await postJobJson(token, data)

    if (!response) return setIsLoading(false)

    toast.success("Job posted successfully")
    // router.push("/created-jobs")
    window.location.href = "/created-jobs"

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Create New Job
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" id="jobForm">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g. Senior Software Engineer"
                    required
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="e.g. Tech Innovators Inc."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. New York, NY"
                    required
                  />
                </div> */}

                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select name="type" required>
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
                  <Select name="industry" required>
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
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education Required</Label>
                  <Select name="education" required>
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select required education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                      <SelectItem value="Master">Master</SelectItem>
                      <SelectItem value="Bachelor">Bachelor</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Briefly describe the job role"
                    required
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="fullDescription">Full Job Description</Label>
                  <Textarea
                    id="fullDescription"
                    name="fullDescription"
                    placeholder="Provide a detailed job description, including responsibilities and requirements"
                    required
                    rows={10}
                  />
                </div> */}

                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" name="deadline" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Images (up to 4)</Label>
                  <Input
                    id="images"
                    name="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <div className="flex flex-wrap gap-4 !mt-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={"Selected image " + (index + 1)}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-white rounded-full w-5 h-5 flex items-center justify-center"
                        >
                          <Image
                            src="/red-x-icon.svg"
                            width={20}
                            height={20}
                            alt="Remove"
                          />
                        </button>
                      </div>
                    ))}
                    {selectedImages.length < 4 && (
                      <Button
                        type="button"
                        variant="outline"
                        className="w-24 h-24"
                        onClick={() =>
                          document.getElementById("images")?.click()
                        }
                      >
                        Add Image
                      </Button>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Job" : "Create Job"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
