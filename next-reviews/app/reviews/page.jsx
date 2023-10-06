import React from 'react'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'
const ReviewsPage = async () => {
    const reviews = await getReviews();
    return (
        <div>
            <Heading>Reviews Page</Heading>
            <p>Here I will list all the Reviews</p>
            <ul className='flex flex-row flex-wrap gap-3 '>
                {reviews.map((review) => (
                    <li key={review.slug} className='bg-white border shadow w-80 rounded-t-lg hover:scale-110 transform  '>
                        <Link href={`/reviews/${review.slug}`}>
                            <img
                                src={review.image}
                                alt={`${review.title}`}
                                width={320}
                                height={180}
                                className='rounded-t-lg'
                            />
                            <h2 className='py-1 text-center font-orbitron font-bold text-2xl'>
                                {review.title}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewsPage

// Path: {domain}/reviews