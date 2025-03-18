"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Globe, Mail, MapPin, Phone } from "lucide-react"
import { useUserContext } from "@/contexts/user-context"
import { View, Download } from "lucide-react"
import { FullScreenLoading } from "@/components/custom/loading"

export default function ProfilePage() {
  const { user } = useUserContext()

  if (!user) {
    return <FullScreenLoading goto={"/"} />
  }

  function download(url, filename) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
      })
      .catch(console.error)
  }

  function getMediaURL(media) {
    if (!media || !media.url) return ""
    const backend = process.env.NEXT_PUBLIC_BACKEND
    return (media.url.startsWith("/") ? backend : "") + media.url
  }

  const cvURL = getMediaURL(user.cv)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage
                  className="object-cover"
                  src={
                    getMediaURL(user.profilePicture) ||
                    (user.isCompany ? "/company.png" : "/user.png")
                  }
                />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {user.name}
                </CardTitle>
                <p className="text-muted-foreground">{"@" + user.username}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.bio && (
                <div>
                  <h3 className="font-semibold">
                    {user.isCompany ? "About Us" : "Bio"}
                  </h3>
                  <p>{user.bio}</p>
                </div>
              )}
              <div className="space-y-2">
                {user.website && (
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {user.website}
                    </a>
                  </div>
                )}
                {user.email && (
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href={"mailto:" + user.email} className="text-primary">
                      {user.email}
                    </a>
                  </div>
                )}
                {user.phone && (
                  <div className="flex items-center">
                    <Phone
                      href={"tel:" + user.phone}
                      className="w-5 h-5 mr-2"
                    />
                    <a href={"tel:" + user.phone} className="text-primary">
                      {user.phone}
                    </a>
                  </div>
                )}
                {user.address && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p>{user.address}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <Link href="/profile/edit">
                  <Button>Edit Profile</Button>
                </Link>
                {user && !user.isCompany && cvURL && (
                  <div>
                    <a href={cvURL} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <View className="mr-2 h-4 w-4" />
                        View CV
                      </Button>
                    </a>
                    <Button
                      className="ml-2"
                      variant="outline"
                      onClick={() => download(cvURL, user.username + "_cv.pdf")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
