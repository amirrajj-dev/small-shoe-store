import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import {ShoeContext} from '../contexts/productsContext'
const Navbar = () => {
  const {products , setProducts} = useContext(ShoeContext)
  const [allProducts , setAllProducts] = useState(products)
  const [searchInputValue , setSearchinputvalue] = useState('')

  useEffect(()=>{
    if (searchInputValue.trim() === '') {
      setProducts(allProducts)
    }else{
      setProducts(products.filter(product=>product.title.toLowerCase().includes(searchInputValue.toLowerCase().trim())))
    }
  } , [searchInputValue , setSearchinputvalue])

  return (
    <div className="p-4 bg-white/90 rounded shadow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-center">
            <FaCartShopping className="text-gray-700 cursor-pointer text-xl" />
        </div>
        <div className="flex items-center justify-center w-full md:w-auto">
            <input value={searchInputValue} onChange={e=>setSearchinputvalue(e.target.value)} type="text" placeholder="Enter a shoe name" className="p-2 bg-gray-700 text-white outline-none rounded shadow-sm w-full md:w-96" />
        </div>
        <div className="flex items-center justify-center gap-4">
            <FaRegUser className="text-gray-700 cursor-pointer text-xl" />
            <IoCartOutline className="text-gray-700 cursor-pointer text-xl" />
            <FaRegHeart className="text-gray-700 cursor-pointer text-xl" />
        </div>
    </div>
  )
}

export default Navbar;