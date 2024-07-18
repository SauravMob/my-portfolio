import React from 'react'
import Image from 'next/image'
import profile_pic from '@/app/assets/images/profile_pic.jpg'
import real_profile_pic from '@/app/assets/images/real_profile_pic.jpeg'
import { hollow } from '@/app/layout'

const Home = () => {
    return (
        <div
            id="home"
            className='w-full h-screen sm:min-h-[90vh] grid grid-cols-3 gap-4 cursor-default'
        >
            <div className='p-16 col-span-2 my-auto'>
                <button className='absolute left-0 rotate-90 top-72'>Scroll</button>
                <span className='absolute left-3 rotate-90 bottom-72 transition translate-y-4'>{">>"}</span>
                <p className='font-semibold text-7xl text-gray-150'>Hey,</p>
                <div className='font-semibold text-7xl text-gray-150 my-8'>I'm
                    <span className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>S</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>u</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>r</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>v</span>
                    <span className={`${hollow.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>U</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>p</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>d</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>h</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>y</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${hollow.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>y</span>
                    ,</div>
                <p className='font-semibold text-7xl text-gray-150'>Software Developer</p>
                <p className='font-semibold text-3xl text-gray-600 ml-2 mt-4'>Full Stack Developer</p>
            </div>
            <div className='flip-container my-auto h-96 w-96 rounded-full'>
                <div className='relative w-full h-full [transform-style:preserve-3d] transition transform duration-1000 hover:[transform:rotateY(180deg)]'>
                    <div className='absolute w-full h-full rounded-full [backface-visibility:hidden]'>
                        <Image
                            src={profile_pic}
                            layout='fill'
                            className='h-96 w-96 rounded-full'
                            alt="Front Image"
                        />
                    </div>
                    <div className='absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                        <Image
                            src={real_profile_pic}
                            layout='fill'
                            className='h-96 w-96 rounded-full'
                            alt="Back Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home