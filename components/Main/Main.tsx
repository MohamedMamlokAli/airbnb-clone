import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <section className="md:mt-44 ">
            <div className="w-full relative h-[700px]  md:h-[600px] lg:h-[700px]">
                <Image
                    src="/main-2.webp"
                    alt="A man in a camping"
                    layout="fill"
                    objectFit="cover"
                    className="md:!object-contain"
                />
            </div>
            <div className="text-white text-center space-y-3">
                <h1 className="text-2xl font-bold">
                    Not sure where to go? Perfect
                </h1>
                <button className="text-lg bg-gray-100 text-purple-700 font-semibold px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition ease-out">
                    I&apos;m flexible
                </button>
            </div>
        </section>
    )
}

export default Main
