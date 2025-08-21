import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
export const Products = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Uploaded Books</h2>

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
              
           </Card>)
        }
      </div>
    </div>
  )
}

export default Products;