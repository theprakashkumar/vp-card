import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [contextFilters, setContextFilters] = useState({
        category: [],
        cardholder: "",
    });
    return (
        <FilterContext.Provider value={{ contextFilters, setContextFilters }}>
            {children}
        </FilterContext.Provider>
    );
};
