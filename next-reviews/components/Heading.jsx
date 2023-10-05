import React from 'react'
import { orbitron } from '@/app/fonts';

const Heading = ({ children }) => {
    return (
        <h1 className={`font-bold font-orbitron pb-3 text-2xl`}>{children}</h1>
    )
}

export default Heading