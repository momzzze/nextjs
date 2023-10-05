import React from 'react'
import Heading from '@/components/Heading';

const HomePage = () => {
    console.log('HomePage=> rendering');
    return (
        <div>
            <Heading>Indie Gamer</Heading>
            <p>Only the best indie games, reviewed for you.</p>
        </div>
    )
}

export default HomePage