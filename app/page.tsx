import Image from "next/image"
import Navbar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import TechStack from "./components/TechStack"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-10">
        <HeroSection />
        <TechStack />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
