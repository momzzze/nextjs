import React from 'react'
import Heading from '@/components/Heading'
import { getReview, getSlugs } from '@/lib/reviews';


export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }))
}

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  console.log(slug);
  return (
    <div>
      <Heading>{review.title}</Heading>
      <p>{review.date}</p>
      <img
        src={review.image}
        alt="stardew-valley"
        width={640}
        height={360}
        className='mb-2 rounded-lg'
      />
      <div dangerouslySetInnerHTML={{ __html: review.body }} className='prose prose-slate max-w-screen-sm' />


    </div>
  )
}

export default ReviewPage

// Path: {domain}/reviews/stardew-valley