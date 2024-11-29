"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Globe, Mail, MapPin, Phone } from "lucide-react"
import { useUserContext } from "@/contexts/user-context"
import { Download } from "lucide-react"
import { FullScreenLoading } from "@/components/custom/loading"

export default function ProfilePage() {
  const { user } = useUserContext()

  if (!user) {
    return <FullScreenLoading goto={"/"} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={user.isCompany ? "/company.png" : "/user.png"}
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
                    <Phone className="w-5 h-5 mr-2" />
                    <p>{user.phone}</p>
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
                {!user.isCompany && (
                  <a href={user.cv} download>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
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
