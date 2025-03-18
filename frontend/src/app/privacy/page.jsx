"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Markdown from "react-markdown"
import { useEffect, useState } from "react"
import getSingle from "@/utils/getSingle"
import { toast } from "react-toastify"
import { Loading } from "@/components/custom/loading"

export default function PrivacyPolicyPage() {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    getSingle("privacy-policy").then((response) => {
      const description = response?.data?.description
      if (description) setMarkdown(description)
      else toast.error("Privacy Policy data not found")
    })
  }, [])

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
              {markdown ? (
                <div className="prose">
                  <Markdown>{markdown}</Markdown>
                </div>
              ) : (
                <Loading />
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
