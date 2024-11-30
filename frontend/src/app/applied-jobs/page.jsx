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

                if (user.acceptedJobs.find((j) => j.id === job.id))
                  status = "accepted"

                if (user.rejectedJobs.find((j) => j.id === job.id))
                  status = "rejected"

                const color = {
                  pending: "bg-yellow-500 hover:bg-yellow-500",
                  accepted: "bg-green-600 hover:bg-green-600",
                  rejected: "bg-red-500 hover:bg-red-500",
                }[status]

                return (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.creator.name}</TableCell>
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
                      <Link href={"/job/" + job.id}>
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
      </main>
      <Footer />
    </div>
  )
}
