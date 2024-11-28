"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// This would typically come from an API or database
const initialJobDetails = {
  id: 1,
  title: "Senior Software Engineer",
  company: "Tech Innovators Inc.",
  location: "Karachi, Pakistan",
  type: "Full-time",
  salary: "80,000 - 120,000 PKR",
  postedDate: "2023-06-01",
  lastDateToApply: "2023-07-15",
  experienceRequired: "5+ years",
  educationRequired: "Bachelor's in Computer Science or related field",
  industry: "Information Technology",
  shortDescription:
    "We are seeking a talented and experienced Senior Software Engineer to join our dynamic team at Tech Innovators Inc. The ideal candidate will have a strong background in full-stack development and a passion for creating innovative solutions.",
  description: `
    <h3>Responsibilities:</h3>
    <ul>
      <li>Design, develop, and maintain high-quality software applications</li>
      <li>Collaborate with cross-functional teams to define and implement new features</li>
      <li>Mentor junior developers and provide technical leadership</li>
      <li>Participate in code reviews and ensure code quality standards are met</li>
      <li>Troubleshoot, debug, and optimize application performance</li>
    </ul>

    <h3>Requirements:</h3>
    <ul>
      <li>5+ years of experience in software development</li>
      <li>Strong proficiency in JavaScript, TypeScript, and React</li>
      <li>Experience with Node.js and Express.js</li>
      <li>Familiarity with database technologies (e.g., MongoDB, PostgreSQL)</li>
      <li>Knowledge of cloud platforms (AWS, Azure, or GCP)</li>
      <li>Excellent problem-solving and communication skills</li>
    </ul>

    <p>Join us in shaping the future of technology and be part of an innovative team that values creativity and continuous learning!</p>
  `,
}

export default function EditJobPage({ params }) {
  const [jobDetails, setJobDetails] = useState(initialJobDetails)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setJobDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would typically send a PUT or PATCH request to update the job details
    console.log("Updating job details:", jobDetails)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push(`/jobs/${params.id}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Edit Job Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={jobDetails.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={jobDetails.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={jobDetails.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type</Label>
                    <Input
                      id="type"
                      name="type"
                      value={jobDetails.type}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary</Label>
                    <Input
                      id="salary"
                      name="salary"
                      value={jobDetails.salary}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastDateToApply">Last Date to Apply</Label>
                    <Input
                      id="lastDateToApply"
                      name="lastDateToApply"
                      type="date"
                      value={jobDetails.lastDateToApply}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experienceRequired">
                      Experience Required
                    </Label>
                    <Input
                      id="experienceRequired"
                      name="experienceRequired"
                      value={jobDetails.experienceRequired}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="educationRequired">
                      Education Required
                    </Label>
                    <Input
                      id="educationRequired"
                      name="educationRequired"
                      value={jobDetails.educationRequired}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      name="industry"
                      value={jobDetails.industry}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <Textarea
                    id="shortDescription"
                    name="shortDescription"
                    value={jobDetails.shortDescription}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Full Description (HTML)</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={jobDetails.description}
                    onChange={handleInputChange}
                    required
                    rows={10}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Job Details"}
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
