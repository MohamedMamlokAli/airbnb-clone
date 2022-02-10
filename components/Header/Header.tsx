import React, { useState, useEffect } from 'react'
import Form from './Form'
import Navbar from './Navbar'

const Header = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const onScroll = () => setOffset(window.pageYOffset)
            // clean up code
            window.removeEventListener('scroll', onScroll)
            window.addEventListener('scroll', onScroll, { passive: true })
            return () => window.removeEventListener('scroll', onScroll)
        }
    }, [])
    // console.log(offset)

    return (
        <header
            className={`text-white bg-transparent ${
                offset > 0 && 'bg-white'
            } fixed top-0 transition duration-200 w-full px-7 py-3`}
        >
            <Navbar offset={offset} />
            <div
                className={`hidden md:block transition duration-75 -translate-y-9 w-2/3 mx-auto opacity-100${
                    offset > 0 && 'opacity-0 scale-0 h-0'
                }`}
            >
                <Form />
            </div>
        </header>
    )
}

export default Header
