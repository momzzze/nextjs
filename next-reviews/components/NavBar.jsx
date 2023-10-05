import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <ul className='flex pl-3 gap-2'>
                <li>
                    <Link className='text-white bg-orange-800 rounded-md m-2 p-2 block hover:bg-orange-600' href="/">Home</Link>
                </li>
                <li>
                    <Link className='text-white bg-orange-800 rounded-md m-2 p-2 block hover:bg-orange-600' href="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link className='text-white bg-orange-800 rounded-md m-2 p-2 block hover:bg-orange-600' href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar