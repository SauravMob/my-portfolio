"use client"

import React from 'react'
import localFont from 'next/font/local'
import { motion } from "framer-motion"

const hollow = localFont({ src: "../app/assets/fonts/LondrinaOutline.ttf" })

const Thanks = () => {
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
            className="w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-10 cursor-default gap-4 flex justify-center items-center flex-col text-gray-300"
        >
            <div className={`${hollow.className} text-8xl font-bold`}>
                Thanks
            </div>
            <div>
                Please feel free to reach out to me
            </div>
        </motion.div>
    )
}

export default Thanks