import { Roboto_Slab } from "next/font/google"
import "./globals.css"

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.className} bg-neutral-800 h-screen`}>{children}</body>
    </html>
  )
}
