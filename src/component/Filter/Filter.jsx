import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";

const Filter = () => {
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

    return (
        <div>
            <div>Filter</div>

            <input
                type="checkbox"
                id="subscription"
                checked={filters.category.includes("subscription")}
                name="subscription"
                value="subscription"
                onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="subscription">Subscription</label>
            <input
                type="checkbox"
                id="burner"
                checked={filters.category.includes("burner")}
                name="burner"
                value="burner"
                onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="burner">Burner</label>
            <label for="cardholder">Cardholder</label>
            <select
                id="cardholder"
                name="cardholder"
                onChange={(e) => handleSelect(e)}
            >
                <option value="Anish">Anish</option>
                <option value="Prakash">Prakash</option>
            </select>

            <div>
                <button onClick={() => setContextFilters(filters)}>
                    Apply
                </button>
                <button
                    onClick={() => {
                        setContextFilters({
                            category: [],
                            cardholder: "",
                        });

                        setFilters({
                            category: [],
                            cardholder: "",
                        });
                    }}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Filter;
