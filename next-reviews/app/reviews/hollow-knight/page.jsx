import React from 'react'
import Heading from '@/components/Heading'

const HollowKnightPage = () => {
    return (
        <div>
            <Heading>Hollow Knight</Heading>
            <img
                src="/images/hollow-knight.jpg"
                alt="hollow-knight"
                width={640}
                height={360}
                className='mb-2 rounded-lg'
            />
            <p>Here I will list all the Reviews</p>
        </div>
    )
}

export default HollowKnightPage