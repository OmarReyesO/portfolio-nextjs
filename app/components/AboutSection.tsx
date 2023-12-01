"use client"
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>COESPO Chihuahua</b> - Fullstack Developer
        </li>
        <li>
          <b>Grupo Ruba</b> - QA Tester
        </li>
        <li>
          <b>Evolución Ventamóvil</b> - Fullstack Developer
        </li>
        <li>
          <b>Foxconn PCE Technology</b> - Software Engineer
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>
          <b>🇲🇽 Universidad Autónonoma de Ciudad Juárez </b> - Bachelor&apos;s
          Degree in Software Engineering
        </li>
        <li>
          <b>🇨🇦 University of Alberta </b> - Mitacs GRI (Globalink Research
          Internship)
        </li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("experience")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpeg"
          alt="about"
          width={500}
          height={500}
          className="hidden lg:block"
        />
        <div className="mt-4 lg:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I&apos;m a full-stack web developer with a passion for crafting
            interactive web applications. Additionally, I have hands-on
            experience in mobile app development with React Native. A quick
            learner, I&apos;m dedicated to expanding my skills and thrive in
            collaborative environments. Excited to contribute to creating
            exceptional applications with a focus on both web and mobile
            platforms.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t?.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
