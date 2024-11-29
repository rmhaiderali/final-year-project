"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload } from "lucide-react"
import Link from "next/link"
import { useUserContext } from "@/contexts/user-context"
import { toast } from "react-toastify"
import updateMeJson from "@/utils/updateMe(json)"
import { FullScreenLoading } from "@/components/custom/loading"

export default function EditUserProfilePage() {
  const { user, setUser, token } = useUserContext()

  if (!user) {
    return <FullScreenLoading goto={"/"} />
  }

  const [updatedUser, setUpdatedUser] = useState({ ...user })

  function setUpdatedUserInfo(e) {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
  }

  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target)
    const jsonData = Object.fromEntries(formData)

    const data = await updateMeJson(token, jsonData)

    if (data !== "OK") {
      return toast.error("Error during updating profile")
    } else {
      setUser(updatedUser)
      toast.success("Updated profile successfully")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Update Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage
                      src={profileImage || ""}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-4">
                    <input
                      type="file"
                      id="picture"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() =>
                        document.getElementById("picture")?.click()
                      }
                    >
                      Upload
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setProfileImage(null)
                        document.getElementById("picture").value = ""
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      value={updatedUser.name}
                      onChange={setUpdatedUserInfo}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      placeholder="Enter username"
                      value={updatedUser.username}
                      onChange={setUpdatedUserInfo}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={updatedUser.email}
                      onChange={setUpdatedUserInfo}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={updatedUser.phone}
                      onChange={setUpdatedUserInfo}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    value={updatedUser.address}
                    onChange={setUpdatedUserInfo}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">
                    {user.isCompany ? "About" : "Bio"}
                  </Label>
                  <Input
                    id="bio"
                    name="bio"
                    placeholder={
                      "Tell us about " +
                      (user.isCompany ? "company" : "yourself")
                    }
                    value={updatedUser.bio}
                    onChange={setUpdatedUserInfo}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">
                    {user.isCompany ? "Website" : "Social Profile"}
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder={
                      user.isCompany
                        ? "https://example.com"
                        : "https://twitter.com/user"
                    }
                    value={updatedUser.website}
                    onChange={setUpdatedUserInfo}
                  />
                </div>

                <div className="flex justify-between">
                  <Link href="/profile">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update Profile"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
