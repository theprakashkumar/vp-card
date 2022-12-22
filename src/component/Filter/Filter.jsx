import "./Filter.css";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { BsSearch, BsFilter } from "react-icons/bs";
import SearchModal from "./SearchModal";

const Filter = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleFilterActive = () =>
        setIsFilterActive((isFilterActive) => !isFilterActive);

    const toggleSearchActive = () =>
        setIsSearchActive((isSearchActive) => !isSearchActive);
    return (
        <div className="filter">
            <div className="filter_button-container">
                <div className="filter_search-container">
                    {isSearchActive && <SearchModal />}
                    <button
                        className="filter_button-search"
                        onClick={toggleSearchActive}
                    >
                        <BsSearch />
                    </button>
                </div>

                <button className="filter_button" onClick={toggleFilterActive}>
                    <BsFilter />
                    <span>Filter</span>
                </button>
            </div>
            {isFilterActive && <FilterModal />}
        </div>
    );
};

export default Filter;
