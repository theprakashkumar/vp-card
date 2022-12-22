import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [contextFilters, setContextFilters] = useState({
        category: [],
        cardholder: "",
    });
    const [searchText, setSearchText] = useState("");
    return (
        <FilterContext.Provider
            value={{
                contextFilters,
                setContextFilters,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
