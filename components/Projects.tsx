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
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1 }}
                    target='_blank' href="https://github.com/SauravMob/MicroserviceProject" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Microservices}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Microservices Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        This project is a comprehensive E-commerce platform built using a microservice architecture. Facilitates service registration and discovery and api gateway providing routing, load balancing, and security. Supports both synchronous (REST API) and asynchronous (message queues) communication methods to ensure high performance and scalability.
                    </div>
                </motion.a>
                <motion.a
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1 }}
                    target='_blank' href="https://github.com/SauravMob/dsp-ui-nextjs" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Dashboard}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dashboard Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        This project is a robust dashboard built using Next.js. Seamlessly integrates with various APIs to provide dynamic and real-time data handling. Capable of managing and processing large volumes of data efficiently. Leverages the latest technologies offered by Next.js, including server-side rendering (SSR) for improved performance and SEO.
                    </div>
                </motion.a>
                <motion.a
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1 }}
                    target='_blank' href="https://github.com/SauravMob/dance-app" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Dance}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dance Logo"
                    />
                    <div className='p-4 xs:text-sm md:text-md'>
                        This project was inspired by the ThinkDance website and focuses on learning and integrating various animation libraries. Explores and integrates react spring libraries to create dynamic and interactive user experiences. Emphasizes learning new techniques and pushing the boundaries of web animation.
                    </div>
                </motion.a>
            </div>

            <div className='flex justify-center p-4 sm:text-lg xs:text-md font-semibold'>Here are some of my recent projects.</div>
        </div>
    )
}

export default Projects