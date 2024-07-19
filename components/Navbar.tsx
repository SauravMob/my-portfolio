import { Tablet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='absolute w-full flex justify-between text-gray-200 text-[16px] bg-transparent p-4'>
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
    )
}

export default Navbar