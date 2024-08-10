"use client"

import React from 'react'
import Image from 'next/image'
import real_profile_pic from "@/app/assets/images/real_profile_pic.jpeg"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div
            id='about'
            className='w-screen h-full bg-gradient-to-r to-neutral-950 from-neutral-900 lg:p-16 xs:px-8 xs:py-16 cursor-default'
        >
            <div className='bg-neutral-800 rounded-xl md:p-8 xs:p-6 h-full'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1.5
                    }}
                    variants={{
                        visible: { x: 0 },
                        hidden: { x: -150 }
                    }}
                    className='flex justify-center md:text-4xl xs:text-2xl font-bold text-gray-300 border-b pb-2'
                >
                    About
                </motion.div>
                <div className='grid grid-cols-3 gap-4 h-full xs:mt-4'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.5,
                        }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0.5, scale: 0.5 }
                        }}
                        className='flex justify-center items-center md:col-span-1 xs:col-span-3 mx-auto'
                    >
                        <Image
                            src={real_profile_pic}
                            className='rounded-lg'
                            alt="Back Image"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1.5,
                        }}
                        variants={{
                            visible: { x: 0 },
                            hidden: { x: 150 }
                        }}
                        className='md:col-span-2 xs:col-span-3 lg:p-8 xs:p-2 md:text-xl sm:text-lg xs:text-sm my-auto text-gray-300'
                    >
                        <div>
                            Hello! I&apos;m delighted to introduce myself.
                        </div>
                        <div className='md:my-4 xs:my-2'>
                            I am from Mumbai and I love software engineering (Especially in Java/Springboot development). Having practiced in both front-end & back-end along with some other devops technologies, I have a broad knowledge on entire development cycle.
                        </div>
                        <div>
                            For the last couple of years, I have been learning and working with various web technologies and hence improved my expertise in it. My curiosity is insatiable and therefore I always strive to learn new things by applying them in technology which has led to development of influential and innovative projects.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About