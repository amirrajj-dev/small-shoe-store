import { useContext, useState, useEffect } from "react";
import { ShoeContext } from "../contexts/productsContext";

const FilterBox = () => {
  const { products, setProducts } = useContext(ShoeContext);
  const [allProducts] = useState(products);
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    category: [],
    price: []
  });

  useEffect(() => {
    let filteredProducts = allProducts;

    if (selectedFilters.color.length > 0 && !selectedFilters.color.includes("rgb(204, 204, 204)")) {
      filteredProducts = filteredProducts.filter(product => selectedFilters.color.includes(product.color));
    }

    if (selectedFilters.category.length > 0 && !selectedFilters.category.includes("all-categories")) {
      filteredProducts = filteredProducts.filter(product => selectedFilters.category.includes(product.category));
    }

    if (selectedFilters.price.length > 0 && !selectedFilters.price.includes("all")) {
      filteredProducts = filteredProducts.filter(product => {
        const price = product.newPrice;
        return selectedFilters.price.some(p => {
          if (p === "0-50") return price <= 50;
          if (p === "50-100") return price > 50 && price <= 100;
          if (p === "100-150") return price > 100 && price <= 150;
          if (p === "150+") return price > 150;
          return false;
        });
      });
    }

    setProducts(filteredProducts);
  }, [selectedFilters, allProducts, setProducts]);

  const handleFilterChange = (e, type) => {
    const { id, checked } = e.target;
    setSelectedFilters(prevState => {
      const filters = prevState[type];
      if (checked) {
        return { ...prevState, [type]: [...filters, id] };
      } else {
        return { ...prevState, [type]: filters.filter(item => item !== id) };
      }
    });
  };

  return (
    <div className="flex flex-col gap-y-3 bg-white/90 rounded shadow p-6 text-sm w-full lg:w-auto">
      <div className="">
        <h2 className="text-xl font-bold text-gray-700 mb-3">Colors</h2>
        <div className="flex flex-wrap gap-2">
          {["all", "black", "blue", "red", "green", "white"].map(color => (
            <div className="flex items-center gap-2" key={color}>
              <input
                type="checkbox"
                id={color}
                name="color"
                value={color}
                className="hidden"
                onChange={(e) => handleFilterChange(e, 'color')}
              />
              <label
                htmlFor={color}
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: color === "all" ? "#cccccc" : color }}
              ></label>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-gray-700 mb-3">Price</h2>
        <div className="flex flex-col gap-1">
          {["all", "0-50", "50-100", "100-150", "150+"].map(price => (
            <div className="flex items-center gap-2" key={price}>
              <input
                type="checkbox"
                id={price}
                name="price"
                value={price}
                onChange={(e) => handleFilterChange(e, 'price')}
              />
              <label htmlFor={price}>
                {price === "all" ? "All" : price === "0-50" ? "0 - 50 $" : price === "50-100" ? "50$ - 100$" : price === "100-150" ? "100 $ - 150$" : "Over 150 $"}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-gray-700 mb-3">Category</h2>
        <div className="flex flex-col gap-1">
          {["all-categories", "sneakers", "flats", "sandals", "heels"].map(category => (
            <div className="flex items-center gap-2" key={category}>
              <input
                type="checkbox"
                id={category}
                name="category"
                value={category}
                onChange={(e) => handleFilterChange(e, 'category')}
              />
              <label htmlFor={category}>
                {category === "all-categories" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBox;