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
import { FullScreenLoading } from "@/components/custom/loading"
import { useRouter } from "next/navigation"
import updateMe from "@/utils/updateMe"
import uploadFiles from "@/utils/uploadFiles"

export default function EditUserProfilePage() {
  const router = useRouter()

  const { user, setUser, token } = useUserContext()

  window.log = () => console.log(user)

  if (!user) {
    return <FullScreenLoading goto={"/"} />
  }

  const [updatedUser, setUpdatedUser] = useState({ ...user })

  function handleInputChange(e) {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [isLoading, setIsLoading] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [profilePictureBase64, setProfilePictureBase64] = useState(null)
  const [cv, setCV] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const jsonData = Object.fromEntries(new FormData(e.target))

    if (cv) {
      const response = await uploadFiles(token, [cv])
      if (!response) return setIsLoading(false)
      updatedUser.cv = response[0]
      jsonData.cv = response[0].id
    }

    if (profilePicture) {
      const response = await uploadFiles(token, [profilePicture])
      if (!response) return setIsLoading(false)
      updatedUser.profilePicture = response[0]
      jsonData.profilePicture = response[0].id
    }

    if (!profilePicture && !user.profilePicture) {
      updatedUser.profilePicture = null
      jsonData.profilePicture = null
    }

    const response = await updateMe(token, jsonData)
    if (!response) return setIsLoading(false)

    setUser(updatedUser)

    toast.success("Updated profile successfully")
    router.replace("/profile")

    setIsLoading(false)
  }

  function getMediaURL(media) {
    if (!media || !media.url) return ""
    const backend = process.env.NEXT_PUBLIC_BACKEND
    return (media.url.startsWith("/") ? backend : "") + media.url
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
                      src={
                        profilePictureBase64 || getMediaURL(user.profilePicture)
                      }
                      className="object-cover"
                    />
                    <AvatarFallback>
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-4">
                    <input
                      type="file"
                      id="profilePicture"
                      accept="image/jpg, image/jpeg, image/png"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setProfilePicture(file)
                          const reader = new FileReader()
                          reader.onloadend = () =>
                            setProfilePictureBase64(reader.result)
                          reader.readAsDataURL(file)
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() =>
                        document.getElementById("profilePicture")?.click()
                      }
                    >
                      Upload
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setUser({ ...user, profilePicture: null })
                        setProfilePicture(null)
                        setProfilePictureBase64(null)
                        document.getElementById("profilePicture").value = ""
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
                {!user?.isCompany && (
                  <div className="space-y-2">
                    <Label htmlFor="website">Upload CV (PDF format)</Label>
                    <Input
                      id="cv"
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) setCV(file)
                      }}
                    />
                  </div>
                )}

                <div className="flex justify-between">
                  <Link href="/profile">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Updating" : "Update Profile"}
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
