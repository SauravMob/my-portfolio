import React from 'react'
import { hollow } from '@/app/layout'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div
            id="home"
            className='w-screen h-screen bg-desktop-pic bg-cover bg-center lg:p-16 sm:p-8 cursor-default'
        >
            <div className='flex flex-col h-full justify-center'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1
                    }}
                    className='lg:text-6xl sm:text-4xl text-gray-300 font-medium'>Hey,</motion.p>
                <div className='text-gray-300 lg:my-6 sm:my-3 font-medium'>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5
                        }}
                        className='lg:text-6xl sm:text-4xl'
                    >I'm</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.6
                        }}
                        className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>S</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.65
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>a</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.7
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>u</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.75
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>r</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.8
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>a</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.85
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>v</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.9
                        }}
                        className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>U</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.95
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>p</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>a</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.05
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>d</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.1
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>h</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.15
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>y</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.15
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>a</motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.2
                        }}
                        className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold lg:text-7xl sm:text-6xl`}>y</motion.span>
                    ,</div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1
                    }} className='font-semibold lg:text-3xl sm:text-2xl text-gray-400 ml-2'
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
                    href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'
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
                    href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'
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
                    href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'
                >
                    <Twitter />
                </motion.a>
            </div>
        </div>
    )
}

export default Home