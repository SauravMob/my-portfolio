import About from "@/components/About"
import Home from "@/components/Home"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Thanks from "@/components/Thanks"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Saurav's Portfolio",
  description: "Saurav Upadhyay portfolio website"
}

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
