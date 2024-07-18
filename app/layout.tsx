import { Inter } from "next/font/google"
import "./globals.css"
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] })
export const hollow = localFont({ src: "./assets/fonts/LondrinaOutline.ttf" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
