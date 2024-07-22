import React from 'react'
import Image from 'next/image'
import real_profile_pic from "@/app/assets/images/real_profile_pic.jpeg"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div
            id='about'
            className='w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-16 cursor-default grid grid-cols-2 gap-4'
        >
            <div className='col-span-1 bg-neutral-800 rounded-xl p-8'>
                <div className='flex justify-center text-4xl font-bold text-gray-300 border-b pb-2'>About</div>
                <div className='col-span-2 p-8 text-xl my-auto text-gray-300'>
                    <div>
                        Hello! I'm delighted to introduce myself.
                    </div>
                    <div className='my-4'>
                        I’m from Mumbai and passionate about software development. With experience in both frontend and backend web applications, I have a comprehensive understanding of the full development lifecycle.
                    </div>
                    <div>
                        Over the past two years, I've had the opportunity to work with a variety of web technologies, which has significantly enriched my expertise. My curiosity drives me to continuously learn and implement new technologies, leading to the creation of impactful and innovative projects.
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Image
                    src={real_profile_pic}
                    className='rounded-lg'
                    alt="Back Image"
                />
            </div>
        </div>
    )
}

export default About