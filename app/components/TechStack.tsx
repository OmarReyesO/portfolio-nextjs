"use client"
import React from "react"
import Image from "next/image"
import { Tech } from "../@types/Tech"

const techStack: Tech[] = [
  { id: "7", name: "Javascript", imgPath: "/images/techs/js.png" },
  { id: "8", name: "Typescript", imgPath: "/images/techs/ts.png" },
  { id: "9", name: "Python", imgPath: "/images/techs/python.png" },
  { id: "1", name: "React & React Native", imgPath: "/images/techs/react.png" },
  { id: "3", name: "Node.js", imgPath: "/images/techs/node.png" },
  { id: "12", name: "Next.js", imgPath: "/images/techs/next.png" },
  { id: "5", name: "Fast API", imgPath: "/images/techs/fast-api.png" },
  { id: "10", name: "Mongo DB", imgPath: "/images/techs/mongo.png" },
  { id: "5", name: "MySQL", imgPath: "/images/techs/mysql.png" }
]

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+"
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000"
  },
  {
    metric: "Awards",
    value: "7"
  },
  {
    metric: "Years",
    value: "5"
  }
]

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4">
      <div className="lg:border-[#33353F] lg:border rounded-md py-8 lg:px-6 flex flex-wrap flex-row lg:gap-8 items-baseline justify-between">
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="basis-3/6 lg:basis-0 my-4 lg:my-0 flex-1 flex flex-col items-center justify-center"
          >
            <Image
              src={tech.imgPath}
              alt={tech.name}
              width={100}
              height={100}
            />
            <p className="text-[#ADB7BE] text-base text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection
