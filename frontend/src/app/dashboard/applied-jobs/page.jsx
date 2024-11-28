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

// This would typically come from an API or database
const appliedJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Co",
    status: "pending",
    appliedDate: "2023-06-01",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc",
    status: "accepted",
    appliedDate: "2023-05-28",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    status: "rejected",
    appliedDate: "2023-05-25",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Data Corp",
    status: "pending",
    appliedDate: "2023-06-03",
  },
]

export default function AppliedJobsPage() {
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
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appliedJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.appliedDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        job.status === "accepted"
                          ? "success"
                          : job.status === "rejected"
                          ? "destructive"
                          : "warning"
                      }
                    >
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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
