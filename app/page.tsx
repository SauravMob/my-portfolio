"use client"

import Home from "@/components/Home"
import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Home />
    </main>
  )
}
