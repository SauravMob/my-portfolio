import React from 'react'
import aws from "@/app/assets/images/aws.webp"
import bootstrap from "@/app/assets/images/bootstrap.png"
import css from "@/app/assets/images/css.webp"
import docker from "@/app/assets/images/docker.webp"
import git from "@/app/assets/images/git.webp"
import hibernate from "@/app/assets/images/hibernate.svg"
import html from "@/app/assets/images/html.webp"
import java from "@/app/assets/images/java.webp"
import javascript from "@/app/assets/images/javascript.webp"
import kafka from "@/app/assets/images/kafka.png"
import linux from "@/app/assets/images/linux.webp"
import mongodb from "@/app/assets/images/mongodb.webp"
import mysql from "@/app/assets/images/mysql.webp"
import nextJs from "@/app/assets/images/nextJs.svg"
import reactjs from "@/app/assets/images/reactjs.webp"
import redis from "@/app/assets/images/redis.png"
import spring from "@/app/assets/images/spring.svg"
import tailwind from "@/app/assets/images/tailwind.webp"
import typescript from "@/app/assets/images/typescript.webp"
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { motion } from "framer-motion"

const Skills = () => {

    const skillsArray = [
        { id: java, name: "Java" },
        { id: spring, name: "Spring" },
        { id: javascript, name: "Javascript" },
        { id: typescript, name: "Typescript" },
        { id: reactjs, name: "ReactJs" },
        { id: nextJs, name: "NextJs" },
        { id: mysql, name: "MySql" },
        { id: mongodb, name: "MongoDB" },
        { id: html, name: "Html" },
        { id: css, name: "Css" },
        { id: tailwind, name: "Tailwind" },
        { id: bootstrap, name: "Bootstrap" },
        { id: hibernate, name: "Hibernate" },
        { id: redis, name: "Redis" },
        { id: kafka, name: "Kafka" },
        { id: linux, name: "Linux" },
        { id: git, name: "Git" },
        { id: docker, name: "Docker" },
        { id: aws, name: "AWS" }
    ]

    return (
        <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.5,

            }}
            id='skills'
            className='w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-10 cursor-default gap-4 text-gray-300'
        >
            <div className='text-5xl font-bold text-gray-300 border-b pb-2'>Skills & Experience</div>

            <div className='grid grid-cols-2 gap-4'>
                <div className='my-10 grid grid-cols-3 gap-4 max-h-[500px]'>
                    {skillsArray.map((v, k) => (
                        <div key={k} className="bg-white/30 backdrop-blur-md rounded-xl flex items-center p-2 gap-2 col-span-1">
                            <Image
                                src={v.id}
                                className="h-8 w-8 bg-neutral-50 rounded-full p-1"
                                alt={`${v.name} Logo`}
                            />
                            {v.name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col p-8 bg-white/30 backdrop-blur-md m-10 rounded-xl h-80">
                    <h1 className="font-semibold md:text-lg">
                        Software Developer
                    </h1>
                    <p className="mb-4 border-b pb-2 text-md">
                        @ Mobavenue pvt ltd.
                    </p>
                    <p className="text-sm md:text-base">
                        Worked as a full stack developer to build a DSP platform used for running campaigns and tracking the huge data of reports. Primary role includes building the apis and integrating it in frontend.
                    </p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-blue-400 text-lg'>Tech</AccordionTrigger>
                            <AccordionContent>
                                Java, Spring, Javascript, ReactJs, MySql, MongoDb, Bootstrap, Hibernate, Linux, Git
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills