"use client"

import { Menu, Tablet, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='flex lg:hidden fixed h-full z-10'>
                {!show ? <Menu
                    color='white'
                    size={32}
                    className='m-4 cursor-pointer'
                    onClick={() => setShow(true)}
                /> : <X
                    color='white'
                    size={32}
                    className='m-4 cursor-pointer absolute right-0 z-10'
                    onClick={() => setShow(false)}
                />}
                {show && <motion.div
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1
                    }}
                    className='flex flex-col pt-32 items-center bg-white/30 backdrop-blur-md font-bold text-xl h-full w-full'>
                    <Link href='/#home' className='text-gray-50 min-w-64 rounded-xl text-center my-4' onClick={() => setShow(false)}>Home</Link>
                    <Link href='/#about' className='text-gray-50 min-w-64 rounded-xl text-center my-4' onClick={() => setShow(false)}>About</Link>
                    <Link href='/#skills' className='text-gray-50 min-w-64 rounded-xl text-center my-4' onClick={() => setShow(false)}>Skills & Experience</Link>
                    <Link href='/#projects' className='text-gray-50 min-w-64 rounded-xl text-center my-4' onClick={() => setShow(false)}>Projects</Link>
                    <div className='mt-32 text-white text-sm flex flex-col items-center gap-2'>
                        <div>Designed by Saurav Upadhyay</div>
                        <div className='flex gap-1 items-center text-[12px] font-semibold cursor-pointer'><Tablet size={18} /> +91 7021496525</div>
                    </div>
                </motion.div>}
            </div>
            <div className='hidden lg:flex fixed w-full justify-between text-gray-200 text-[16px] bg-transparent p-4 z-10'>
                <div className='w-1/3 flex justify-around font-semibold'>
                    <Link href='/#home' className='hover:text-gray-50 hover:font-bold'>Home</Link>
                    <Link href='/#about' className='hover:text-gray-50 hover:font-bold'>About</Link>
                    <Link href='/#skills' className='hover:text-gray-50 hover:font-bold'>Skills & Experience</Link>
                    <Link href='/#projects' className='hover:text-gray-50 hover:font-bold'>Projects</Link>
                </div>
                <div className='flex gap-1 items-center text-[12px] font-semibold cursor-pointer'>
                    <Tablet size={18} /> +91 7021496525
                </div>
            </div>
        </>
    )
}

export default Navbar