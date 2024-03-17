import React from "react";
import { useState } from "react";
import { products } from "../products";

const Product = ({ product }) => {
    return (
      <div className="m-8 relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={product.image} className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt={product.name} />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {product.name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {product.price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {product.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-gray-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Compare
          </button>
        </div>
      </div>
    );
  };

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState('')
    const [searchItem, setSearchItem] = useState('')
    return (
        <>
            <div className='bg-[#050505] p-4'>
                <div className="max-w-2xl mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(event)=>setInputSearch(event.target.value)}  type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-unyteGreen focus:border-[#5CC048] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products..." required />
                        <button onClick={(event)=>setSearchItem(inputSearch)}  className="text-white absolute right-2.5 bottom-2.5 bg-unyteGreen hover:bg-[#5CC048] focus:ring-4 focus:outline-none focus:ring-[#5CCf98] font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
            </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center md:items-start md:justify-between items">
               {
                products.filter((product) =>{
                    if(searchItem ==''){
                        return product
                    }else if(product.name.toLowerCase().includes(searchItem.toLowerCase())){
                        return product
                    } })
                .map((product)=>{
                    return(        
                            <Product key={product.id} product={product} />
                    )  } )
                }
                </div>
        </>
    );
};

export default SearchBar;
