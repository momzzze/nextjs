import React from 'react'
import Heading from '@/components/Heading';
import Link from 'next/link';

const HomePage = () => {
    console.log('HomePage=> rendering');
    return (
        <div className='flex flex-col items-center'>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>Only the best indie games, reviewed for you.</p>
            <div className='bg-white border shadow w-80 hover:shadow-xl md:hover:shadow-none rounded-t-lg lg:hover:scale-110 lg:transform lg:transition-transform duration-300 sm:w-full'>
                <Link href='/reviews/stardew-valley'className='flex flex-col sm:flex-row'>
                    <img
                        src="/images/stardew-valley.jpg"
                        alt="stardew-valley"
                        width={320}
                        height={180}
                        className='rounded-t-lg sm:rounded-l sm:rounded-r-none'
                    />
                    <h2 className='py-1 text-center font-orbitron font-bold text-2xl sm:px-2'>
                        Stardew Valley
                    </h2>
                </Link>
            </div>
           
        </div>
    )
}

export default HomePage