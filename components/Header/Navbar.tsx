import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
interface Props {
    offset: number
}
const Navbar: React.FC<Props> = ({ offset }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative w-28 h-10 hidden md:block">
                <Image
                    src="/abnbLogo.png"
                    layout="fill"
                    alt="Airbnb Logo"
                    objectFit="contain"
                />
            </div>
            {/* search bar */}
            <div
                className={`bg-gray-100 opacity-100 shadow-xl  border-black text-black rounded-full flex items-center p-3 space-x-2 justify-center  md:translate-y-44 md:opacity-0 origin-bottom transition duration-150 ${
                    offset > 0 && ' md:translate-y-0  md:!opacity-100'
                } `}
            >
                <SearchIcon height={20} className="text-red-500" />
                <p className="font-semibold text-sm">Where are you going?</p>
            </div>
            {/* become a host --- login */}
        </div>
    )
}

export default Navbar
