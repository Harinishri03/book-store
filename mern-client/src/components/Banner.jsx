import React from 'react'
import BannerCard from '../Home/BannerCard';

export const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md: w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-800'>for the Best Prices</span></h2>
                <p className='md:w-10/12 '>
                        Our Book Store is a one-stop destination for book lovers where knowledge meets imagination. We provide a wide range of books across different categories—spanning from fiction, non-fiction, academic references, and more. Whether you’re a student, a professional, or simply a passionate reader, our collection is designed to cater to every kind of reader.With an easy-to-use platform, you can browse, search, and explore books effortlessly. 
                </p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none bg-white'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner;