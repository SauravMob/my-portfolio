import { Tablet } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='absolute w-full flex justify-between text-gray-200 text-[16px] bg-gradient-to-r from-gray-900 to-gray-950 p-4'>
            <div className='w-1/3 flex justify-around font-semibold'>
                <button className='hover:text-gray-50 hover:font-bold'>Home</button>
                <button className='hover:text-gray-50 hover:font-bold'>About</button>
                <button className='hover:text-gray-50 hover:font-bold'>Skills & Experience</button>
                <button className='hover:text-gray-50 hover:font-bold'>Projects</button>
            </div>
            <div className='flex gap-1 items-center text-[12px] font-semibold'>
                <Tablet size={14} /> +91 7021496525
            </div>
        </div>
    )
}

export default Navbar