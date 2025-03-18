"use client"

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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useUserContext } from "@/contexts/user-context"
import { FullScreenLoading } from "@/components/custom/loading"
import Link from "next/link"
import Image from "next/image"

export default function AppliedJobsPage() {
  const { user } = useUserContext()

  if (!user || user.isCompany) {
    return <FullScreenLoading goto={"/"} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-5">My Applied Jobs</h1>
        {user.appliedJobs?.length ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.appliedJobs.map((job) => {
                  let status = "pending"

                  if (user.acceptedJobs.find((j) => j.documentId === job.documentId))
                    status = "accepted"

                  if (user.rejectedJobs.find((j) => j.documentId === job.documentId))
                    status = "rejected"

                  const color = {
                    pending: "bg-yellow-500 hover:bg-yellow-500",
                    accepted: "bg-green-600 hover:bg-green-600",
                    rejected: "bg-red-500 hover:bg-red-500",
                  }[status]

                  return (
                    <TableRow key={job.documentId}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>
                        <Link
                          href={"/profile/" + job.creator.username}
                          className="flex items-center gap-2"
                        >
                          {job.creator.name}
                          <Image
                            src="/external-link.svg"
                            width={16}
                            height={16}
                            alt="External link"
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            "outline-none border-none shadow-none " + color
                          }
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Link href={"/job/" + job.documentId}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="my-32 text-center text-lg text-muted-foreground">
            You have not applied to any job yet.
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
