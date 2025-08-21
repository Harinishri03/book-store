import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

export const BestSelllerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res => res.json().then(data => setBooks(data.slice(0,10))))
    }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Selling Books"/>
    </div>
  )
}


export default BestSelllerBooks;