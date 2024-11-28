import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react"

// This would typically come from an API or database
const companyProfile = {
  name: "Tech Innovators Inc.",
  logo: "/placeholder.svg?height=100&width=100",
  description:
    "Leading software development company specializing in innovative solutions for businesses.",
  website: "https://techinnovators.com",
  email: "contact@techinnovators.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, Silicon Valley, CA 94000",
  foundedYear: "2010",
}

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={companyProfile.logo}
                  alt={companyProfile.name}
                />
                <AvatarFallback>
                  <Building2 className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {companyProfile.name}
                </CardTitle>
                <p className="text-muted-foreground">
                  Founded in {companyProfile.foundedYear}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">About Us</h3>
                <p>{companyProfile.description}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <a
                    href={companyProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {companyProfile.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <a
                    href={`mailto:${companyProfile.email}`}
                    className="text-primary hover:underline"
                  >
                    {companyProfile.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <p>{companyProfile.phone}</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p>{companyProfile.address}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/profile/company/edit">
                  <Button>Edit Company Profile</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
