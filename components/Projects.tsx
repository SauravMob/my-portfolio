import Image from 'next/image'
import React from 'react'
import Dashboard from '@/app/assets/images/Dashboard.png'
import Dance from '@/app/assets/images/Dance.png'
import Microservices from '@/app/assets/images/Microservices.png'
import { motion } from "framer-motion"

const Projects = () => {
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
            id='projects'
            className='w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-10 cursor-default gap-4 text-gray-300'
        >
            <div className='text-5xl font-bold text-gray-300 border-b pb-2'>Projects</div>

            <div className='p-4 grid grid-cols-3 gap-4'>
                <a target='_blank' href="https://github.com/SauravMob/MicroserviceProject" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Microservices}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Microservices Logo"
                    />
                    <div className='p-4'>
                        This project is a comprehensive E-commerce platform built using a microservice architecture. Facilitates service registration and discovery and api gateway providing routing, load balancing, and security. Supports both synchronous (REST API) and asynchronous (message queues) communication methods to ensure high performance and scalability.
                    </div>
                </a>
                <a target='_blank' href="https://github.com/SauravMob/dsp-ui-nextjs" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Dashboard}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dashboard Logo"
                    />
                    <div className='p-4'>
                        This project is a robust dashboard built using Next.js. Seamlessly integrates with various APIs to provide dynamic and real-time data handling. Capable of managing and processing large volumes of data efficiently. Leverages the latest technologies offered by Next.js, including server-side rendering (SSR) for improved performance and SEO.
                    </div>
                </a>
                <a target='_blank' href="https://github.com/SauravMob/dance-app" className="bg-neutral-800 backdrop-blur-md rounded-xl p-4 col-span-1">
                    <Image
                        src={Dance}
                        className="bg-neutral-50 p-1 rounded-lg"
                        alt="Dance Logo"
                    />
                    <div className='p-4'>
                        This project was inspired by the ThinkDance website and focuses on learning and integrating various animation libraries. Explores and integrates react spring libraries to create dynamic and interactive user experiences. Emphasizes learning new techniques and pushing the boundaries of web animation.
                    </div>
                </a>
            </div>

            <div className='flex justify-center p-4 text-lg font-semibold'>Here are some of my recent projects.</div>
        </motion.div>
    )
}

export default Projects