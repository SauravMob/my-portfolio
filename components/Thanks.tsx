"use client"

import React from 'react'
import localFont from 'next/font/local'
import { motion } from "framer-motion"
import { Github, Linkedin, Tablet, Twitter } from 'lucide-react'

const hollow = localFont({ src: "../app/assets/fonts/LondrinaOutline.ttf" })

const Thanks = () => {
    return (
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
            id='skills'
            className="w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-10 cursor-default gap-4 flex justify-center items-center flex-col text-gray-300"
        >
            <div className={`${hollow.className} text-8xl font-bold`}>
                Thanks
            </div>
            <div>
                Please feel free to reach out to me
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
            <div className='flex gap-2 items-center font-semibold cursor-pointer'>
                <Tablet size={22} /> +91 7021496525
            </div>
        </motion.div>
    )
}

export default Thanks