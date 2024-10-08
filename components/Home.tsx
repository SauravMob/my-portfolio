"use client"

import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from "framer-motion"

import localFont from 'next/font/local'

const hollow = localFont({ src: "../app/assets/fonts/LondrinaOutline.ttf" })

const Home = () => {
    return (
        <div
            id="home"
            className='w-screen h-screen bg-desktop-pic bg-cover lg:p-16 xs:px-8 xs:py-16 cursor-default'
        >
            <div className='flex flex-col h-full justify-center'>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    className='lg:text-6xl sm:text-4xl xs:text-2xl text-gray-300 font-medium'>
                    Hey,
                </motion.p>
                <div className='text-gray-300 lg:my-6 sm:my-3 xs:my-2 font-medium'>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.5
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='lg:text-6xl sm:text-4xl xs:text-2xl'
                    >I&apos;m</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.6
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>S</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.65
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>a</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.7
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>u</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.75
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>r</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.8
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>a</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.85
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>v</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.9
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>U</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.95
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>p</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>a</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1.05
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>d</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>h</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1.15
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>y</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1.2
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>a</motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 1.25
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl xs:text-4xl text-gray-50`}>y</motion.span>
                    ,</div>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    className='font-semibold lg:text-3xl sm:text-2xl xs:text-2xl text-gray-400'
                >Full Stack Developer</motion.p>
            </div>
            <div className='text-white flex gap-4'>
                <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                    target='_blank'
                    href='https://www.linkedin.com/in/saurav-u-245013128' className='border flex items-center justify-center h-10 w-10 rounded-lg z-10'
                >
                    <Linkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                    target='_blank'
                    href='https://github.com/SauravMob' className='border flex items-center justify-center h-10 w-10 rounded-lg z-10'
                >
                    <Github />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                    target='_blank'
                    href='https://x.com/Sauravu193' className='border flex items-center justify-center h-10 w-10 rounded-lg z-10'
                >
                    <Twitter />
                </motion.a>
            </div>
        </div>
    )
}

export default Home