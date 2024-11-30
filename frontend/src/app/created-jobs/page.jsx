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
import { useUserContext } from "@/contexts/user-context"
import { FullScreenLoading } from "@/components/custom/loading"
import Link from "next/link"
import updateJob from "@/utils/updateJob"

export default function CreatedJobsPage() {
  const { user, token, setUser } = useUserContext()

  if (!user || !user.isCompany) {
    return <FullScreenLoading goto={"/"} />
  }

  const [selectedJob, setSelectedJob] = useState(null)

  const handleStatusChange = async (applicant, newStatus) => {
    selectedJob.acceptedApplicants = selectedJob.acceptedApplicants.filter(
      (a) => a.id !== applicant.id
    )

    selectedJob.rejectedApplicants = selectedJob.rejectedApplicants.filter(
      (a) => a.id !== applicant.id
    )

    if (newStatus === "accept") selectedJob.acceptedApplicants.push(applicant)
    if (newStatus === "reject") selectedJob.rejectedApplicants.push(applicant)

    const acceptedApplicants = selectedJob.acceptedApplicants.map((a) => a.id)
    const rejectedApplicants = selectedJob.rejectedApplicants.map((a) => a.id)

    await updateJob(
      token,
      { acceptedApplicants, rejectedApplicants },
      selectedJob.id
    )
    setUser({ ...user })
  }

  console.log(user)

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
                <TableHead>No. of Applicants</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.createdJobs.map((job) => {
                return (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>
                      {new Date(job.createdAt).toLocaleDateString()}
                    </TableCell>
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
                                <TableHead>CV / Resume</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {selectedJob?.applicants.map((applicant) => {
                                let status = "pending"

                                if (
                                  selectedJob.acceptedApplicants.some(
                                    (a) => a.id === applicant.id
                                  )
                                )
                                  status = "accepted"

                                if (
                                  selectedJob.rejectedApplicants.some(
                                    (a) => a.id === applicant.id
                                  )
                                )
                                  status = "rejected"

                                const color = {
                                  pending: "bg-yellow-500 hover:bg-yellow-500",
                                  accepted: "bg-green-600 hover:bg-green-600",
                                  rejected: "bg-red-500 hover:bg-red-500",
                                }[status]

                                return (
                                  <TableRow key={applicant.id}>
                                    <TableCell>{applicant.name}</TableCell>
                                    <TableCell>
                                      <Button
                                        size="sm"
                                        variant={"outline"}
                                        onClick={() => {}}
                                      >
                                        Download
                                      </Button>
                                    </TableCell>
                                    <TableCell>
                                      <Badge
                                        className={
                                          "outline-none border-none shadow-none " +
                                          color
                                        }
                                      >
                                        {status.charAt(0).toUpperCase() +
                                          status.slice(1)}
                                      </Badge>
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex space-x-2">
                                        {status !== "accepted" && (
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={(e) => {
                                              e.target.disabled = true
                                              e.target.innerHTML = "Accepting"

                                              handleStatusChange(
                                                applicant,
                                                "accept"
                                              )
                                            }}
                                          >
                                            Accept
                                          </Button>
                                        )}
                                        {status !== "rejected" && (
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={(e) => {
                                              e.target.disabled = true
                                              e.target.innerHTML = "Rejecting"

                                              handleStatusChange(
                                                applicant,
                                                "reject"
                                              )
                                            }}
                                          >
                                            Reject
                                          </Button>
                                        )}
                                        {status !== "pending" && (
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={(e) => {
                                              e.target.disabled = true
                                              e.target.innerHTML =
                                                "Marking Pending"

                                              handleStatusChange(applicant)
                                            }}
                                          >
                                            Mark Pending
                                          </Button>
                                        )}
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                )
                              })}
                            </TableBody>
                          </Table>
                        </DialogContent>
                      </Dialog>
                      <Link href={"/job/" + job.id}>
                        <Button size="sm" className="ml-3" variant={"outline"}>
                          View Job
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  )
}
