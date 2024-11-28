"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// This would typically come from an API or database
const postedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    postedDate: "2023-06-01",
    applicants: [
      { id: 1, name: "John Doe", status: "pending" },
      { id: 2, name: "Jane Smith", status: "accepted" },
      { id: 3, name: "Bob Johnson", status: "rejected" },
    ],
  },
  {
    id: 2,
    title: "UX Designer",
    postedDate: "2023-05-28",
    applicants: [
      { id: 4, name: "Alice Brown", status: "pending" },
      { id: 5, name: "Charlie Davis", status: "pending" },
    ],
  },
]

export default function CreatedJobsPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  const handleStatusChange = (jobId, applicantId, newStatus) => {
    // In a real application, you would update this in your backend
    console.log(
      `Updating status for job ${jobId}, applicant ${applicantId} to ${newStatus}`
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-5">Created Jobs</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Posted Date</TableHead>
                <TableHead>Number of Applicants</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {postedJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.postedDate}</TableCell>
                  <TableCell>{job.applicants.length}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedJob(job)}
                        >
                          View Applicants
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>
                            Applicants for {selectedJob?.title}
                          </DialogTitle>
                        </DialogHeader>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedJob?.applicants.map((applicant) => (
                              <TableRow key={applicant.id}>
                                <TableCell>{applicant.name}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      applicant.status === "accepted"
                                        ? "success"
                                        : applicant.status === "rejected"
                                        ? "destructive"
                                        : "warning"
                                    }
                                  >
                                    {applicant.status.charAt(0).toUpperCase() +
                                      applicant.status.slice(1)}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      variant={
                                        applicant.status === "accepted"
                                          ? "default"
                                          : "outline"
                                      }
                                      onClick={() =>
                                        handleStatusChange(
                                          selectedJob.id,
                                          applicant.id,
                                          "accepted"
                                        )
                                      }
                                    >
                                      Accept
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant={
                                        applicant.status === "rejected"
                                          ? "default"
                                          : "outline"
                                      }
                                      onClick={() =>
                                        handleStatusChange(
                                          selectedJob.id,
                                          applicant.id,
                                          "rejected"
                                        )
                                      }
                                    >
                                      Reject
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  )
}
