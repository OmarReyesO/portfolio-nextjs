import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omar's Portfolio 💻"
}

interface LayoutProps {
  types: string // Replace this with the actual type of 'types' if it's not a string
}

export default function RootLayout({
  children
}: LayoutProps & {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
