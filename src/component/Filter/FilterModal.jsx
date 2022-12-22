import { useState, useContext } from "react";
import "./FilterModal.css";
import { FilterContext } from "../../context/FilterContext";
import { DataContext } from "../../context/DataProvider";

const FilterModal = () => {
    const { allUsers } = useContext(DataContext);
    const { setContextFilters } = useContext(FilterContext);
    const [filters, setFilters] = useState({
        category: [],
        cardholder: "",
    });

    const handleCheckbox = (e) => {
        const category = e.target.value;
        const indexOfCategory = filters.category.indexOf(category);
        if (indexOfCategory === -1) {
            setFilters({
                ...filters,
                category: [...filters.category, category],
            });
            console.log(filters);
        } else {
            console.log("found");
            setFilters({
                ...filters,
                category: [
                    ...filters.category.slice(0, indexOfCategory),
                    ...filters.category.slice(indexOfCategory, -1),
                ],
            });
            console.log(filters);
        }
    };

    const handleSelect = (e) => {
        setFilters({ ...filters, cardholder: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setContextFilters(filters);
    };

    const clearHandler = () => {
        setContextFilters({
            category: [],
            cardholder: "",
        });

        setFilters({
            category: [],
            cardholder: "",
        });
    };

    return (
        <form className="filter-modal" onSubmit={(e) => submitHandler(e)}>
            <h4 className="filter-modal_title">Filters</h4>
            <div className="filter-modal_filter-container">
                <div className="filter-modal_type-container">
                    <p className="filter-modal_type-container_title">Types</p>
                    <div className="filter-modal_type-container-checkbox-container">
                        <div className="filter-modal_type-container_type">
                            <input
                                type="checkbox"
                                id="subscription"
                                checked={filters.category.includes(
                                    "subscription"
                                )}
                                name="subscription"
                                value="subscription"
                                onChange={(e) => handleCheckbox(e)}
                            />
                            <label htmlFor="subscription">Subscription</label>
                        </div>
                        <div className="filter-modal_type-container_type">
                            <input
                                type="checkbox"
                                id="burner"
                                checked={filters.category.includes("burner")}
                                name="burner"
                                value="burner"
                                onChange={(e) => handleCheckbox(e)}
                            />
                            <label htmlFor="burner">Burner</label>
                        </div>
                    </div>
                </div>
                <div className="filter-modal_cardholder-container">
                    <label
                        for="cardholder"
                        className="filter-modal_cardholder-container_title"
                    >
                        Cardholder
                    </label>
                    <select
                        id="cardholder"
                        name="cardholder"
                        onChange={(e) => handleSelect(e)}
                        className="filter-modal_cardholder-container_dropdown"
                    >
                        <option value={""}>All Cardholder</option>
                        {allUsers.map((user) => (
                            <option value={user}>{user}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-modal_button-container">
                    <button className="filter-modal_button-container_button filter-modal_button-container_button-apply">
                        Apply
                    </button>
                    <button
                        onClick={() => clearHandler()}
                        className="filter-modal_button-container_button filter-modal_button-container_button-clear"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FilterModal;
