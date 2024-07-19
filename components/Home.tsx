import React from 'react'
import { hollow } from '@/app/layout'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Home = () => {
    return (
        <div
            id="home"
            className='w-screen h-screen sm:min-h-[90vh] bg-desktop-pic bg-cover p-16 cursor-default'
        >
            <div className='flex flex-col h-full justify-center'>
                <p className='text-6xl text-gray-300 font-medium'>Hey,</p>
                <div className='text-gray-300 my-6 font-medium'>
                    <span className='text-6xl'>I'm</span>
                    <span className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>S</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>u</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>r</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>v</span>
                    <span className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>U</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>p</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>d</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>h</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>y</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block font-extrabold text-7xl`}>y</span>
                    ,</div>
                {/* <p className='font-semibold text-4xl text-gray-300'>Full Stack Developer</p> */}
                <p className='font-semibold text-3xl text-gray-400 ml-2'>Full Stack Developer</p>
            </div>
            <div className='text-white flex gap-4'>
                <a href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'>
                    <Linkedin />
                </a>
                <a href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'>
                    <Github />
                </a>
                <a href='/#linkdln' className='border flex items-center justify-center h-10 w-10 rounded-lg'>
                    <Twitter />
                </a>
            </div>
        </div>
    )
}

export default Home