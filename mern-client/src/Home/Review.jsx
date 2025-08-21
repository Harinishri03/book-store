import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6" //importing react icons 
import { Avatar } from "flowbite-react"; //importing avatar from flowbite react
import profilePic from "../assets/profilepic.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-14 lg:px-24'>
        <h2 className='text-5xl font-bold font-sans text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}//this will be spacing in between the two slides
        pagination={{
          clickable: true,
        }}
        breakpoints={{//breakpoints here representes that only 3 slide will be visible and others will be hidden
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* the below are customer reviews just copied and pasted problem here is couldnt get flowbite react so lets see it later */}
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */} 
                <div className='mt-7'>
                    <p className='mb-5'>"Absolutely loved the collection! I found books that I couldn’t get in my local stores. The delivery was quick and the books were well-packed. Will definitely order again!"</p>
                    
                      <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <h5 className='text-lg font-medium'>Priya S</h5>
                      <p className='text-base'>Reviewver</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */} 
                <div className='mt-7'>
                    <p className='mb-5'>
"Great variety of novels and academic books. The prices are affordable compared to other platforms. The only thing I wish is faster delivery in my area."</p>
                    
                      <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <h5 className='text-lg font-medium'>Rahul K.</h5>
                      <p className='text-base'>Reviewver</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */} 
                <div className='mt-7'>
                    <p className='mb-5'>"User-friendly website with a smooth buying experience. I also sold some of my old books here—it was hassle-free. A perfect platform for book lovers!"</p>
                    
                      <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <h5 className='text-lg font-medium'>Meera J.</h5>
                      <p className='text-base'>Reviewver</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */} 
                <div className='mt-7'>
                    <p className='mb-5'>"I liked the ‘Read Now’ feature for e-books, it’s so convenient. Customer service is also very responsive. Would recommend this bookstore to all students and readers."</p>
                    
                      <Avatar img={profilePic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <h5 className='text-lg font-medium'>Raghu V</h5>
                      <p className='text-base'>Reviewver</p>
                </div>
            </div>
        </SwiperSlide>

        
      </Swiper>
        </div>
    </div>
  )
}

export default Review