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

// This would typically come from an API or database
const jobDetails = {
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
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
}

export default function JobDetailPage({ params }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    {jobDetails.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {jobDetails.company}
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {jobDetails.type}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{jobDetails.location}</span>
                </div>
                <div className="flex items-center">
                  <Banknote className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{jobDetails.salary}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Posted on: {jobDetails.postedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Apply before: {jobDetails.lastDateToApply}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Experience: {jobDetails.experienceRequired}</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{jobDetails.educationRequired}</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Industry: {jobDetails.industry}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p>{jobDetails.shortDescription}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Company Images</h2>
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    {jobDetails.images.map((src, index) => (
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

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: jobDetails.description }}
              />

              <div className="mt-6 flex gap-4">
                <Button className="w-full md:w-auto bg-black hover:bg-gray-800">
                  Apply Now
                </Button>
                <Link
                  href={`/jobs/${jobDetails.id}/edit`}
                  className="w-full md:w-auto"
                >
                  <Button variant="outline" className="w-full">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Job
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
