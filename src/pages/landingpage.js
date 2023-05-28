import React from "react";
import Navbar from '../components/navbar';
import Categories from '../components/categories';
import Compare from '../components/compare';
import Product from '../components/products';
import advertisement from '../images/showcase_d.webp';
import ProductNew from "../components/ProductNew";

const Address = () => {
 return(
   <>
      <Navbar />
      <div class="content">
         <div class="col-lg-2">
            <Categories />
         </div>
            <div class="col-lg-7">
               <img src={advertisement} alt="add" />
            </div>
            <div class="col-lg-3">
               <Compare />
            </div>
         
      </div>

         {/* <div class="content">
            <div class="col-lg-2">
               &nbsp;
            </div>
            <div class="col-lg-10">
               <Product />
            </div>
         </div> */}


         <ProductNew />

 
  </>

 );
};

export default Address;