import React, { useState } from "react";
import { products } from "../products";
import Product from "./Product";
import ProductComparison from "./ProductComparison";

const SearchBar = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [max, setMax] = useState()
    
    const handleProductSelect = (product) => {
        // Check if the product is already in the selectedProducts array
        const index = selectedProducts.findIndex((p) => p.id === product.id);
    
        // If the product is not in the array, add it; otherwise, remove it
        if (index === -1) {
            if (selectedProducts.length < 2) {
                setSelectedProducts((prevSelectedProducts) => [
                    ...prevSelectedProducts,
                    product,
                ]);
            } else {
                setMax(true)
                alert("You can only compare up to 2 products.");
            }
        } else {
            setMax(true)
            setSelectedProducts((prevSelectedProducts) =>
                prevSelectedProducts.filter((p) => p.id !== product.id)
            );
        }
    };
    
    // Filter products based on search criteria
    const filteredProducts = products.filter((product) => {
        return (
            searchItem === '' ||
            product.name.toLowerCase().includes(searchItem.toLowerCase()) ||
            product.category.includes(searchItem.toLowerCase())
        );
    });

    // JSX to render products or 'Item Not Found' message
    const productsToRender = filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
            <Product maximum={max} key={product.id} product={product} onSelectProduct={handleProductSelect} />
        ))
    ) : (
        <div className="text-gray-300 font-md text-2xl max-w-2xl mx-auto mt-8 mx-auto">Item Not Found</div>
    );


    return (
        <>

    {selectedProducts.length === 2  && ( 
      <>
<div className="fixed inset-0 flex justify-center items-center z-20">
    <div className="absolute inset-0 bg-gray-400 opacity-50  z-10"></div>

    <div className="relative z-10 max-h-full overflow-hidden">
        <div className="flex justify-center items-start">
            {selectedProducts.map((product) => (
                <ProductComparison key={product.id} product={product} />
            ))}
        </div>
        <button
            onClick={event =>{ setSelectedProducts([]); setMax(false)}}
            className="absolute top-0 right-0 bg-gray-100 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 duration-200"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
</div>
      </>
    )}



            <div className='bg-[#050505] p-4 sticky top-0 z-10'>
                <div className="max-w-2xl mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(event) => setInputSearch(event.target.value)}  type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-unyteGreen focus:border-[#5CC048] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products..." required />
                        <button onClick={(event) => setSearchItem(inputSearch)}  className="text-white absolute right-2.5 bottom-2.5 bg-unyteGreen hover:bg-[#5CC048] focus:ring-4 focus:outline-none focus:ring-[#5CCf98] font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center md:items-start md:justify-between items">
                {productsToRender}
            </div>
        </>
    );
};

export default SearchBar;
