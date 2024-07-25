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
                    initial={{ x: -150 }}
                    whileInView={{ x: 0 }}
                    exit={{ x: -150 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1.5,

                    }}
                    className='flex justify-center md:text-4xl xs:text-2xl font-bold text-gray-300 border-b pb-2'
                >About</motion.div>
                <div className='grid grid-cols-3 gap-4 h-full xs:mt-4'>
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
                        className='flex justify-center items-center md:col-span-1 xs:col-span-3 mx-auto'
                    >
                        <Image
                            src={real_profile_pic}
                            className='rounded-lg'
                            alt="Back Image"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 150 }}
                        whileInView={{ x: 0 }}
                        exit={{ x: 150 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1.5,

                        }}
                        className='md:col-span-2 xs:col-span-3 lg:p-8 xs:p-2 md:text-xl sm:text-lg xs:text-sm my-auto text-gray-300'
                    >
                        <div>
                            Hello! I&apos;m delighted to introduce myself.
                        </div>
                        <div className='md:my-4 xs:my-2'>
                            I’m from Mumbai and passionate about software development. With experience in both frontend and backend web applications, I have a comprehensive understanding of the full development lifecycle.
                        </div>
                        <div>
                            Over the past two years, I&apos;ve had the opportunity to work with a variety of web technologies, which has significantly enriched my expertise. My curiosity drives me to continuously learn and implement new technologies, leading to the creation of impactful and innovative projects.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About