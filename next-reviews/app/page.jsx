import React from 'react'
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getFeaturedReviews, getReviews } from '@/lib/reviews';


const HomePage = async () => {
    // const reviews = await getReviews();
    const review = await getFeaturedReviews();
    return (
        <div className='flex flex-col items-center'>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>Only the best indie games, reviewed for you.</p>
            <div className='bg-white border shadow w-80 hover:shadow-xl  rounded-t-lg  sm:w-full mb-5'>
                <Link href={`/reviews/${review.slug}`} className='flex flex-col sm:flex-row'>
                    <img
                        src={review.image}
                        alt={review.title}
                        width={320}
                        height={180}
                        className='rounded-t-lg sm:rounded-l sm:rounded-r-none'
                    />
                    <h2 className='py-1 text-center font-orbitron font-bold text-2xl sm:px-2'>
                        {review.title}
                    </h2>
                </Link>
            </div>

        </div>
    )
}

export default HomePage