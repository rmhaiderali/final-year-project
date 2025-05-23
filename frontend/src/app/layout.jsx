import { Inter } from "next/font/google"
import { UserProvider } from "@/contexts/user-context"
import UserLoader from "../components/custom/user-loader"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Job Portal",
  description: "Find Your Dream Job with Us",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer closeOnClick={false} draggable={false} />
          <UserLoader>{children}</UserLoader>
        </UserProvider>
      </body>
    </html>
  )
}
