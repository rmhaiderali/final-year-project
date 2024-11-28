import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                About JobFinder
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                JobFinder is a leading online platform dedicated to connecting
                talented professionals with exciting career opportunities.
                Founded in 2023, we've quickly become one of the most trusted
                job search resources in the market.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
              <p>
                Our mission is to empower job seekers and employers alike by
                providing a user-friendly, efficient, and effective job matching
                service. We strive to make the job search and recruitment
                process as smooth and rewarding as possible.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                What Sets Us Apart
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Cutting-edge matching algorithms to connect the right talent
                  with the right opportunities
                </li>
                <li>
                  Comprehensive job listings across various industries and
                  experience levels
                </li>
                <li>
                  User-friendly interface for both job seekers and employers
                </li>
                <li>Robust privacy protection and data security measures</li>
                <li>
                  Dedicated customer support team to assist users throughout
                  their journey
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mt-6 mb-4">Our Team</h2>
              <p>
                Behind JobFinder is a diverse team of professionals passionate
                about revolutionizing the job search experience. Our team
                combines expertise in technology, human resources, and customer
                service to deliver a platform that truly serves the needs of our
                users.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Join Us in Shaping the Future of Work
              </h2>
              <p>
                Whether you're a job seeker looking for your next big
                opportunity or an employer searching for top talent, JobFinder
                is here to help you succeed. Join our community today and
                experience the difference of a job platform designed with your
                needs in mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
