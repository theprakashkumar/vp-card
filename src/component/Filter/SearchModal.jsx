import "./SearchModal.css";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const SearchModal = () => {
    const { searchText, setSearchText } = useContext(FilterContext);
    return (
        <div className="search-modal">
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Card"
            />
        </div>
    );
};

export default SearchModal;
