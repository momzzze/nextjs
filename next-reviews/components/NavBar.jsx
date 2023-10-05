import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <ul className='flex pl-3 gap-2 items-center'>
                <li>
                    <Link className='font-bold font-orbitron text-orange-800 text-3xl  rounded-md m-2 p-2 block hover:text-orange-600' href="/">Indie Gamer</Link>
                </li>
                <li className='ml-auto'>
                    <Link className='text-orange-800 rounded-md m-2 p-2 block hover:text-orange-600 text-2xl' href="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link className=' text-orange-800  rounded-md m-2 p-2 block hover:text-orange-600 text-2xl' href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar