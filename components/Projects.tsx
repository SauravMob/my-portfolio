"use client"

import Image from 'next/image'
import React from 'react'
import Dashboard from '@/app/assets/images/Dashboard.png'
import Dance from '@/app/assets/images/Dance.png'
import Microservices from '@/app/assets/images/Microservices.png'
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div
            id='projects'
            className='w-screen h-full bg-gradient-to-r to-neutral-950 from-neutral-900 lg:p-10 xs:px-8 xs:py-16 cursor-default gap-4 text-gray-300'
        >
            <div className='md:text-4xl xs:text-2xl font-bold text-gray-300 border-b pb-2'>Projects</div>

            <div className='md:p-4 xs:py-4 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4'>
                <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: -80, opacity: 0 }
                    }}
                    target='_blank'
                    href="https://github.com/SauravMob/MicroserviceProject"
                    className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1"
                >
                    <Image
                        src={Microservices}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Microservices Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        <div className='xs:text-md md:text-lg font-bold pb-1'>Ecommerce Backend platform</div>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>Built using microservice architecture.</li>
                            <li>Includes Service registration.</li>
                            <li>Includes Discovery and api gateway, load balancing and security.</li>
                            <li>Supports both synchronous (REST API) and asynchronous (message queues) communication.</li>
                        </ul>
                    </div>
                </motion.a>
                <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { y: 0, opacity: 1 },
                        hidden: { y: 80, opacity: 0 }
                    }}
                    target='_blank'
                    href="https://github.com/SauravMob/dsp-ui-nextjs"
                    className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1"
                >
                    <Image
                        src={Dashboard}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dashboard Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        <div className='xs:text-md md:text-lg font-bold pb-1'>Dashboard project</div>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>Built using NextJs + Typescript.</li>
                            <li>Seamlessly integrates with various APIs to provide dynamic and real-time data handling.</li>
                            <li>Capable of managing and processing large volumes of data efficiently.</li>
                            <li>Leverages the latest technologies offered by Next.js, including server-side rendering (SSR) for improved performance and SEO.</li>
                        </ul>
                    </div>
                </motion.a>
                <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: 80, opacity: 0 }
                    }}
                    target='_blank'
                    href="https://github.com/SauravMob/dance-app"
                    className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1"
                >
                    <Image
                        src={Dance}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dance Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        <div className='xs:text-md md:text-lg font-bold pb-1'>Dance website</div>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>Inspired by the ThinkDance website.</li>
                            <li>Explores and integrates react spring libraries to create dynamic and interactive user experiences.</li>
                            <li>Emphasizes learning new techniques and pushing the boundaries of web animation.</li>
                        </ul>
                    </div>
                </motion.a>
            </div>

            <div className='flex justify-center p-4 sm:text-lg xs:text-md font-semibold'>Here are some of my recent projects.</div>
        </div>
    )
}

export default Projects