"use client"

import About from "@/components/About"
import Home from "@/components/Home"
import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </main>
  )
}
