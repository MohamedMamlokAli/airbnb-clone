import React from 'react'
import { SearchIcon, UserIcon } from '@heroicons/react/solid'
import { GlobeAltIcon } from '@heroicons/react/outline'
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
                className={`bg-gray-100 opacity-100 shadow-xl  border-black text-black rounded-full flex items-center p-3 space-x-2 justify-center  md:translate-y-44 md:opacity-0 origin-bottom transition duration-150 ease-in ${
                    offset > 0 && ' md:translate-y-0  md:!opacity-100'
                } `}
            >
                <SearchIcon height={20} className="text-red-500" />
                <p className="font-semibold text-sm">Where are you going?</p>
            </div>
            {/* become a host --- login */}
            <div className="hidden md:flex place-self-center  items-center  text-sm space-x-5 font-light">
                <div className="flex items-center gap-2 mix-blend-difference">
                    <span className="hidden lg:block whitespace-nowrap">
                        Become a host
                    </span>
                    <GlobeAltIcon className="w-8 h-10 font-light" />
                </div>
                <div className="bg-gray-100 !mix-blend-normal flex items-center justify-evenly w-full p-3 px-5  rounded-full text-black shadow-lg">
                    <div className="space-y-1">
                        <span className="block h-0.5 w-4 bg-black"></span>
                        <span className="block h-0.5 w-4 bg-black"></span>
                        <span className="block h-0.5 w-4 bg-black"></span>
                    </div>
                    <div className="relative">
                        <UserIcon height={20} />
                        <div className="w-3 h-3 rounded-full bg-red-400 absolute -top-3 -right-4 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
