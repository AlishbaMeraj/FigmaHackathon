import Brands from "./Components/brands";
import Hero from "./Components/Hero";
import Product from "./Components/product";
import Reviews from "./Components/Review";
import Dressstyle from "./Dresstyle";








export default function Home(){
  return(
    <div>
      
      <Hero/>
      <Brands/>
      <Product/>
      <Dressstyle/>
      <Reviews/>
     
    </div>
  )
}