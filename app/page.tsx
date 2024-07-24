"use client"

import About from "@/components/About"
import Home from "@/components/Home"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Thanks from "@/components/Thanks"

export default function Page() {
  return (
    <main className="overflow-hidden min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Thanks />
    </main>
  )
}
