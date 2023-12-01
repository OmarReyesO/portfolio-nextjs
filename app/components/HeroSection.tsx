"use client"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import DownloadButton from "./DownloadButton"

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center lg:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m Omar
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a dedicated developer with a passion for crafting
            outstanding digital experiences.
          </p>
          <div>
            <DownloadButton />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden col-span-4 place-self-center mt-4 lg:mt-0 lg:block"
        >
          <div className="hidden lg:w-[400px] lg:h-[400px] relative lg:flex justify-center items-center">
            <Image
              src="/images/avatar.jpeg"
              alt="hero image"
              className="absolute"
              width={400}
              height={400}
              style={{ borderRadius: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
