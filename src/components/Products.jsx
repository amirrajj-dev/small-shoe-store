import { useCallback, useContext, useEffect, useState } from "react";
import { ShoeContext } from "../contexts/productsContext";
import Product from "./Product";

const Products = () => {
  const { products, setProducts } = useContext(ShoeContext);
  const [allProducts, setAllProducts] = useState(products);
  const [filterValue, setFilterValue] = useState("All Products");
  const filterArr = ["All Products", "Nike", "Adidas", "Puma", "Vans"];

  useEffect(() => {
    setProducts(allProducts);
    filterProducts();
  }, [filterValue]);

  const filterProducts = useCallback(() => {
    if (filterValue === "All Products") {
      setProducts(allProducts);
    } else {
      const newProducts = allProducts.filter(product => product.company === filterValue);
      setProducts(newProducts);
    }
  }, [filterValue, allProducts, setProducts]);

  return (
    <div className="bg-white/90 rounded shadow p-4 flex flex-col flex-1 w-full">
      <h2 className="text-gray-700 font-bold text-xl">Recommended</h2>
      <div className="flex flex-wrap items-center mt-4 font-medium gap-4 md:gap-10 text-sm text-gray-500">
        {filterArr.map((item, index) => (
          <span
            onClick={() => setFilterValue(item)}
            key={index + 1}
            className={`${filterValue === item ? "border-b border-gray-700" : null} cursor-pointer`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 overflow-y-auto overflow-x-hidden max-h-[475px]">
        {products.length > 0 ? (
          products.map((item, index) => <Product key={index + 1} {...item} />)
        ) : (
          <div className=" text-gray-500 text-lg mt-10 italic ">
            No products found. Try adjusting your filters or try again later :(
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;