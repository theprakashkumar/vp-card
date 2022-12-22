import "./Filter.css";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { BsFilter } from "react-icons/bs";

const Filter = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);

    const toggleFilterActive = () =>
        setIsFilterActive((isFilterActive) => !isFilterActive);
    return (
        <div className="filter">
            {isFilterActive && <FilterModal />}
            <button className="filter_button" onClick={toggleFilterActive}>
                <BsFilter />
                <span>Filter</span>
            </button>
        </div>
    );
};

export default Filter;
