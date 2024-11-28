import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Download } from "lucide-react"

// This would typically come from an API or database
const userProfile = {
  name: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Passionate software developer with 5 years of experience in web technologies.",
  location: "New York, USA",
  joinDate: "January 2020",
  cvUrl: "/path-to-cv.pdf", // This would be the actual path to the user's CV
}

export default function UserProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {userProfile.name}
                </CardTitle>
                <p className="text-muted-foreground">@{userProfile.username}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Bio</h3>
                <p>{userProfile.bio}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>{userProfile.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Member Since</h3>
                  <p>{userProfile.joinDate}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>{userProfile.email}</p>
              </div>
              <div className="flex justify-between">
                <Link href="/profile/edit">
                  <Button>Edit Profile</Button>
                </Link>
                <a href={userProfile.cvUrl} download>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
