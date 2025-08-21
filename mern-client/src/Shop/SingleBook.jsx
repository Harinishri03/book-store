import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const SingleBook = () => {
  const { _id, name, author, imageUrl, bookPdfUrl, description } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>

        {/* Full Image (responsive with max width control) */}
        <div className="flex justify-center">
          <img 
            src={imageUrl} 
            alt={name} 
            className='w-full max-w-md object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Book Details */}
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>{name}</h2>
          <p className='text-lg text-gray-700'>
            <span className='font-semibold'>Author:</span> {author}
          </p>
          <p className='text-gray-600 leading-relaxed'>
            {description}
          </p>

          {/* PDF Link */}
          {bookPdfUrl && (
            <div className="space-x-4 mt-4">
              <a 
                href={bookPdfUrl} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='px-6 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition'
              >
                 Read the book here
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleBook;
