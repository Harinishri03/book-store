import React from 'react'
import Banner from '../components/Banner';
import FavouriteBooks, { BestSelllerBooks } from './BestSeller';
import { FaV } from 'react-icons/fa6';
import { FavBook } from './FavBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';


export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSelllerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home;
