import { hollow } from '@/app/layout'
import React from 'react'

const Thanks = () => {
    return (
        <div
            id='skills'
            className="w-screen h-screen sm:min-h-[90vh] bg-gradient-to-r to-neutral-950 from-neutral-900 p-10 cursor-default gap-4 flex justify-center items-center flex-col text-gray-300"
        >
            <div className={`${hollow.className} text-8xl font-bold`}>
                Thanks
            </div>
            <div>
                Please feel free to reach out to me
            </div>
        </div>
    )
}

export default Thanks