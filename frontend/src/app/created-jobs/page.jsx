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
import Image from "next/image"
import deleteJob from "@/utils/deletetJob"
import { toast } from "react-toastify"

export default function CreatedJobsPage() {
  const { user, token, setUser } = useUserContext()

  if (!user || !user.isCompany) {
    return <FullScreenLoading goto={"/"} />
  }

  const [selectedJob, setSelectedJob] = useState(null)

  const handleStatusChange = async (applicant, newStatus) => {
    selectedJob.acceptedApplicants = selectedJob.acceptedApplicants.filter(
      (a) => a.documentId !== applicant.documentId
    )

    selectedJob.rejectedApplicants = selectedJob.rejectedApplicants.filter(
      (a) => a.documentId !== applicant.documentId
    )

    if (newStatus === "accept") selectedJob.acceptedApplicants.push(applicant)
    if (newStatus === "reject") selectedJob.rejectedApplicants.push(applicant)

    const acceptedApplicants = selectedJob.acceptedApplicants.map(
      (a) => a.documentId
    )
    const rejectedApplicants = selectedJob.rejectedApplicants.map(
      (a) => a.documentId
    )

    await updateJob(
      token,
      { acceptedApplicants, rejectedApplicants },
      selectedJob.documentId
    )
    setUser({ ...user })
  }

  // console.log(user)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-5">Created Jobs</h1>
        {user.createdJobs?.length ? (
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
                    <TableRow key={job.documentId}>
                      <TableCell className="font-medium">
                        <Link
                          href={"/job/" + job.documentId}
                          className="flex items-center gap-2"
                        >
                          {job.title}
                          <Image
                            src="/external-link.svg"
                            width={16}
                            height={16}
                            alt="External link"
                          />
                        </Link>
                      </TableCell>
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
                            {selectedJob?.applicants?.length ? (
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Name</TableHead>
                                    {/* <TableHead>CV / Resume</TableHead> */}
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {selectedJob?.applicants.map((applicant) => {
                                    let status = "pending"

                                    if (
                                      selectedJob.acceptedApplicants.some(
                                        (a) =>
                                          a.documentId === applicant.documentId
                                      )
                                    )
                                      status = "accepted"

                                    if (
                                      selectedJob.rejectedApplicants.some(
                                        (a) =>
                                          a.documentId === applicant.documentId
                                      )
                                    )
                                      status = "rejected"

                                    const color = {
                                      pending:
                                        "bg-yellow-500 hover:bg-yellow-500",
                                      accepted:
                                        "bg-green-600 hover:bg-green-600",
                                      rejected: "bg-red-500 hover:bg-red-500",
                                    }[status]

                                    return (
                                      <TableRow key={applicant.documentId}>
                                        <TableCell>
                                          <Link
                                            href={
                                              "/profile/" + applicant.username
                                            }
                                            className="flex items-center gap-2"
                                          >
                                            {applicant.name}
                                            <Image
                                              src="/external-link.svg"
                                              width={16}
                                              height={16}
                                              alt="External link"
                                            />
                                          </Link>
                                        </TableCell>
                                        {/* <TableCell>
                                          <Button
                                            size="sm"
                                            variant={"outline"}
                                            onClick={() => {}}
                                          >
                                            Download
                                          </Button>
                                        </TableCell> */}
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
                                                  e.target.innerHTML =
                                                    "Accepting"

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
                                                  e.target.innerHTML =
                                                    "Rejecting"

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
                            ) : (
                              <div className="my-16 text-center text-muted-foreground">
                                No applicants found.
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        {/* <Link href={"/job/" + job.documentId}>
                          <Button
                            size="sm"
                            className="ml-3"
                            variant={"outline"}
                          >
                            View Job
                          </Button>
                        </Link> */}
                        <Button
                          size="sm"
                          className="ml-3"
                          variant={"destructive"}
                          onClick={async (e) => {
                            e.target.disabled = true
                            try {
                              const response = await deleteJob(
                                job.documentId,
                                token
                              )

                              if (!response)
                                throw new Error("Failed to delete job")
                              
                              toast.success("Job deleted successfully")
                              setUser({
                                ...user,
                                createdJobs: user.createdJobs.filter(
                                  (j) => j.documentId !== job.documentId
                                ),
                              })
                            } catch (error) {
                              toast.error("Failed to delete job")
                            } finally {
                              e.target.disabled = false
                            }
                          }}
                        >
                          Delete Job
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="my-32 text-center text-lg text-muted-foreground">
            You have not created any job yet.
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
