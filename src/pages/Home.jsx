import { Link } from "react-router-dom";
import Tobar from "../components/home/Tobar"; 
import Searchbar from "../components/home/Searchbar";
import Tittlebar from "../components/home/Tittlebar"; 

import HeroCarousel from "../components/home/HeroCarousel";
import StartNow from "../components/home/StartNow";
import Categories from "../components/home/categories";

import Discover from "../components/home/Discover"; 
import Brands from "../components/home/Brands";


import ProductSlider from "../components/home/ProductSlider";
import FootBanner from "../components/home/FootBanner"; 


import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Tobar/>
      <Searchbar/>
      <Tittlebar/>

       <HeroCarousel/>
      <StartNow/>

      <Categories/>

      <Discover /> 
      <Brands/>
      <ProductSlider/>
      <FootBanner/>

      <Footer/>
      {/* <Link to="/products" >
         <button className="btn btn-primary"> View Products </button> 
      </Link> */}
    </>
  );
}
