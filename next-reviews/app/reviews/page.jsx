import React from 'react'
import Link from 'next/link'
import Heading from '@/components/Heading'
const ReviewsPage = () => {
    return (
        <div>
            <Heading>Reviews Page</Heading>
            <p>Here I will list all the Reviews</p>
            <ul className='flex flex-col gap-3 '>
                <li className='bg-white border shadow w-80 rounded-t-lg hover:shadow-xl'>
                    <Link href='/reviews/hollow-knight'>
                        <img
                            src="/images/hollow-knight.jpg"
                            alt="hollow-knight"
                            width={320}
                            height={180}
                            className='rounded-t-lg'
                        />
                        <h2 className='py-1 text-center'>
                            Hollow Knight
                        </h2>
                    </Link>
                </li>
                <li className='bg-white border shadow w-80 rounded-t-lg hover:shadow-xl'>
                    <Link href='/reviews/stardew-valley'>
                        <img
                            src="/images/stardew-valley.jpg"
                            alt="stardew-valley"
                            width={320}
                            height={180}
                            className='rounded-t-lg'
                        />
                        <h2 className='py-1 text-center'>
                            Stardew Valley
                        </h2>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ReviewsPage

// Path: {domain}/reviews