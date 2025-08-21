import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {name, author, imageUrl, category, description, bookPdfUrl} = useLoaderData();
    const bookCategories = [
      "Fiction", "Non-Fiction", "Mystery", "Horror", "Romance", "Fantasy", "Sci-Fic",
      "Bibliography", "Autobiography", "History", "Self-help", "Memoir", "Business",
      "Children", "Travel", "Religious", "Art and Science"
    ];
  
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  
    const handleChangesSelectedValue = (event) => {
      setSelectedBookCategory(event.target.value);
    };
  
    // Handle book submission
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
  
      const name = form.bookName.value;
      const author = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const description = form.description.value;
      const pdfUrl = form.bookPDFUrl.value;
  
      const UpdateBookObj = {
        name, author, imageURL, category, description, pdfUrl,
      }
      //console.log(bookObj);      
      //updating book data
      fetch(`http://localhost:5000/book/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(UpdateBookObj)
      }).then(res => res.json()).then(data => {
        alert("Book updated succesfully!!!")
      })
    };
  
    
  
  
    return (
      <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Update Book data here</h2>
  
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-6">
          {/* Row 1: Book name + Author */}
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="bookName" className="font-semibold">Book Name</Label>
              </div>
              <TextInput id="bookName" name="bookName" type="text" defaultValue={name} placeholder="Enter the book name here" required />
            </div>
  
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="authorName" className="font-semibold">Author Name</Label>
              </div>
              <TextInput id="authorName" name="authorName" type="text" defaultValue={author} placeholder="Enter the author name here" required />
            </div>
          </div>
  
          {/* Row 2: Image URL + Category */}
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="imageURL" className="font-semibold">Image URL</Label>
              </div>
              <TextInput id="imageURL" name="imageURL" type="text" defaultValue={imageUrl} placeholder="Enter the URL here" required />
            </div>
  
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="categoryName" className="font-semibold">Book Category</Label>
              </div>
              <Select
                id="categoryName"
                name="categoryName"
                className="w-full rounded"
                value={selectedBookCategory}
                onChange={handleChangesSelectedValue}
              >
                {bookCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </div>
          </div>
  
          {/* Book description */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" className="font-semibold">Book Description</Label>
            </div>
            <Textarea id="description" name="description" defaultValue={description} placeholder="Enter the description here..." required rows={4} className="w-full" />
          </div>
  
          {/* Book PDF link */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFUrl" className="font-semibold">Book PDF Url</Label>
            </div>
            <TextInput id="bookPDFUrl" name="bookPDFUrl" defaultValue={bookPdfUrl} placeholder="Enter the URL" required type="text" />
          </div>
  
          <Button type="submit" className="mt-5 bg-cyan-200 text-black hover:text-white">
            Update Book
          </Button>
        </form>
      </div>
    );
}

export default EditBooks