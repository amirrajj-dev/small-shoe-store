import FilterBox from "./components/FilterBox";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoeContextProvider from "./contexts/productsContext";

const App = () => {
  return (
    <>
      <ShoeContextProvider>
        <div className="max-w-7xl mx-auto p-2 mt-3">
          <Navbar />
          <div className="flex flex-col lg:flex-row items-start gap-4 mt-8">
            <FilterBox />
            <Products />
          </div>
        </div>
      </ShoeContextProvider>
    </>
  );
};

export default App;