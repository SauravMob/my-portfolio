"use client"

import React from 'react'
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
        // { id: java, name: "Java" },
        { id: spring, name: "Spring Boot" },
        // { id: javascript, name: "Javascript" },
        { id: reactjs, name: "ReactJs" },
        { id: typescript, name: "Typescript" },
        { id: nextJs, name: "NextJs" },
        { id: mysql, name: "MySql" },
        { id: mongodb, name: "MongoDB" },
        // { id: html, name: "Html" },
        // { id: css, name: "Css" },
        { id: tailwind, name: "Tailwind" },
        { id: bootstrap, name: "Bootstrap" },
        { id: hibernate, name: "Hibernate" },
        { id: redis, name: "Redis" },
        { id: kafka, name: "Kafka" },
        { id: linux, name: "Linux" },
        { id: git, name: "Git" },
        { id: docker, name: "Docker" }
    ]

    return (
        <div
            id='skills'
            className='w-screen h-full bg-gradient-to-r to-neutral-950 from-neutral-900 lg:p-10 xs:px-8 xs:py-16 cursor-default gap-4 text-gray-300'
        >
            <div className='md:text-4xl xs:text-2xl font-bold text-gray-300 border-b pb-2'>Skills & Experience</div>

            <div className='grid grid-cols-2 gap-4'>
                <motion.ul
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 1, scale: 0 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                    className='my-10 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:max-h-[500px] xs:max-h-[600px] lg:col-span-1 xs:col-span-2'
                >
                    {skillsArray.map((v, k) => (
                        <motion.li
                            key={k}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { y: 0, opacity: 1 },
                                hidden: { y: 20, opacity: 0 }
                            }}
                            className="bg-white/30 backdrop-blur-md rounded-xl flex items-center p-2 gap-2 col-span-1"
                        >
                            <Image
                                src={v.id}
                                className="h-8 w-8 bg-neutral-50 rounded-full p-1"
                                alt={`${v.name} Logo`}
                            />
                            {v.name}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { x: 0 },
                        hidden: { x: 200 }
                    }}
                    className="flex flex-col p-8 bg-white/30 backdrop-blur-md lg:my-10 w-full rounded-xl lg:h-80 lg:col-span-1 md:col-span-4 sm:col-span-3 xs:col-span-2">
                    <h1 className="font-semibold md:text-lg">
                        Software Developer
                    </h1>
                    <p className="mb-4 border-b pb-2 text-md">
                        @ Mobavenue Pvt Ltd.
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
                </motion.div>
            </div>
        </div>
    )
}

export default Skills