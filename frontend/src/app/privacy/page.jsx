import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                1. Introduction
              </h2>
              <p>
                JobFinder ("we", "our", or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                website and services.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Personal information (e.g., name, email address, phone number)
                </li>
                <li>
                  Profile information (e.g., resume, work history, education)
                </li>
                <li>Account credentials</li>
                <li>
                  Communication data (e.g., messages sent through our platform)
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Match job seekers with potential employers</li>
                <li>Communicate with you about our services</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We may share your information with employers when you apply for
                jobs, and with service providers who perform services on our
                behalf. We do not sell your personal information to third
                parties.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized or unlawful
                processing, accidental loss, destruction, or damage.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also have the right to restrict or object
                to certain processing of your data.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@jobfinder.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
