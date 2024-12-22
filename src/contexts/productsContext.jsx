import { createContext, useEffect, useState } from "react";
import data from "../db/data";
export const ShoeContext = createContext()

const ShoeContextProvider = ({children})=>{
    const [products , setProducts] = useState(data)

    return(
        <ShoeContext.Provider value={{products , setProducts }}>
            {children}
        </ShoeContext.Provider>
    )
}

export default ShoeContextProvider;