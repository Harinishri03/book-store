import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
export const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are Available Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card className="max-w-sm">
            <img src={book.imageUrl} alt='' className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.name}
                </p>
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
                
               </p>
               <a 
                href={book.bookPdfUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-700 font-semibold text-white py-2 px-4 rounded inline-block text-center"> Read Now</a>

           </Card>)
        }
      </div>
    </div>
  )
}

export default Shop;