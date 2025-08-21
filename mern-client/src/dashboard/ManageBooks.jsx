import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

  //delete a book from the data
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!!!")
      setAllBooks(data);
    })
  }
  return (
    <div className='PX-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Manage Your Books</h2>
      {/*Table that stores the uploaded books data if you want you can edit the data and delete the data*/}
      <Table className='lg:w-[1180px]'>
        <TableHead>
          <TableRow>
            <TableHeadCell>No.</TableHeadCell>
            <TableHeadCell>Book Name</TableHeadCell>
            <TableHeadCell>Author Name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span>Edit or Manage</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        {
          allBooks.map((book, index) => <TableBody className="divide-y" key={book._id}>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.name}
            </TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.category}</TableCell>
            <TableCell>Rs.240</TableCell>
            <TableCell>
              <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/editbooks/${book._id}`}>Edit</Link>
              <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </TableCell>
          </TableRow>
          </TableBody>)
        }
        
      </Table>
    </div>
  )
}

export default ManageBooks