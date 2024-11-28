import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using JobFinder's website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                2. Description of Service
              </h2>
              <p>
                JobFinder provides an online platform connecting job seekers
                with potential employers. We do not guarantee employment or the
                accuracy of job listings.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                3. User Accounts
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account. You must immediately notify us of any unauthorized use
                of your account.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                4. User Conduct
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Use the service for any unlawful purpose</li>
                <li>Post inaccurate, defamatory, or offensive content</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>
                  Attempt to gain unauthorized access to any part of the service
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                The content, organization, graphics, design, and other matters
                related to JobFinder are protected under applicable copyrights
                and other proprietary laws. Copying, redistributing, use or
                publication of any such matters or any part of the site is
                prohibited without our express permission.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p>
                The service is provided on an "as is" and "as available" basis.
                We disclaim all warranties of any kind, whether express or
                implied.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                JobFinder shall not be liable for any indirect, incidental,
                special, consequential or punitive damages resulting from your
                use of or inability to use the service.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of any significant changes.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                9. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of [Your Jurisdiction], without regard
                to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                10. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at terms@jobfinder.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
