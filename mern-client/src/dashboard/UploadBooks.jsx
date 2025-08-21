import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
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
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.bookName.value;
    const author = form.authorName.value;
    const imageUrl = form.imageURL.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPDFUrl.value;

    const bookObj = {
      name, author, imageUrl, category, description, bookPdfUrl}
    console.log(bookObj);

    //once you enter the value you have to update in the database right. how do we do it. lets see below
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data)
      alert("Book uploaded successfully!!!!")
      form.reset();
    })
  };



  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Books here</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col gap-6">
        {/* Row 1: Book name + Author */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookName" className="font-semibold">Book Name</Label>
            </div>
            <TextInput id="bookName" name="bookName" type="text" placeholder="Enter the book name here" required />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" className="font-semibold">Author Name</Label>
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Enter the author name here" required />
          </div>
        </div>

        {/* Row 2: Image URL + Category */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" className="font-semibold">Image URL</Label>
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Enter the URL here" required />
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
          <Textarea id="description" name="description" placeholder="Enter the description here..." required rows={4} className="w-full" />
        </div>

        {/* Book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" className="font-semibold">Book PDF Url</Label>
          </div>
          <TextInput id="bookPDFUrl" name="bookPDFUrl" placeholder="Enter the URL" required type="text" />
        </div>

        <Button type="submit" className="mt-5 bg-cyan-200 text-black hover:text-white">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBooks;
