import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
  
  // Handle book submission
  const handleUserSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.bookName.value;
    const author = form.authorName.value;
    const imageUrl = form.imageURL.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPDFUrl.value;

  };



  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Profile</h2>

      <form onSubmit={handleUserSubmit} className="flex lg:w-[1180px] flex-col gap-6">
        {/* Row 1: Book name + Author */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookName" className="font-semibold">Full Name</Label>
            </div>
            <TextInput id="bookName" name="bookName" type="text" placeholder="Enter the book name here" required />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" className="font-semibold">Username</Label>
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Enter the author name here" required />
          </div>
        </div>

        {/* Row 2: Image URL + Category */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" className="font-semibold">Email Address</Label>
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Enter the URL here" required />
          </div>
        </div>

        {/* Book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" className="font-semibold">Bio/About Me</Label>
          </div>
          <Textarea id="description" name="description" placeholder="Enter the description here..." required rows={4} className="w-full" />
        </div>

        {/* Book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" className="font-semibold">Address</Label>
          </div>
          <Textarea id='bookPDFUrl' name='bookPDFUrl' placeholder='enter the address here' required rows={4} className='w-full' />
        </div>

        <Button type="submit" className="mt-5 bg-cyan-200 text-black hover:text-white">
          Upload Profile
        </Button>
      </form>
    </div>
  );
};

export default UploadBooks;
