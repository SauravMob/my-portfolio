import React from 'react'
import { hollow } from '@/app/layout'

const Home = () => {
    return (
        <div
            id="home"
            className='w-screen h-screen sm:min-h-[90vh] bg-desktop-pic bg-cover flex items-center'
        >
            <div className='p-16 col-span-2 my-auto'>
                <button className='absolute left-0 rotate-90 top-72'>Scroll</button>
                <span className='absolute left-3 rotate-90 bottom-72 transition translate-y-4'>{">>"}</span>
                <p className='text-5xl text-gray-300 font-medium'>Hey,</p>
                <div className='text-gray-300 my-6 font-medium'>
                    <span className='text-5xl'>I'm</span>
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
                <p className='font-semibold text-7xl text-gray-300'>Software Developer</p>
                <p className='font-semibold text-3xl text-gray-400 ml-2 mt-4'>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Home