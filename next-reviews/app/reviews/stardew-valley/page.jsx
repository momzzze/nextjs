import React from 'react'
import Heading from '@/components/Heading'

const StardewValleyPage = () => {
  return (
    <div>
      <Heading>StardewValley Page</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="stardew-valley"
        width={640}
        height={360}
        className='mb-2 rounded-lg'
      />
      <p>This will be review for Stardew Valley.</p>
    </div>
  )
}

export default StardewValleyPage

// Path: {domain}/reviews/stardew-valley