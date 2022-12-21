import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const MainHeader = () => {
    const { currentTab, setTab } = useContext(DataContext);
    const onClickHandler = (data) => {
        setTab(data);
    };
    return (
        <div>
            <Link to="/your" onClick={() => onClickHandler("your")}>
                Your
            </Link>
            <Link to="/" onClick={() => onClickHandler("all")}>
                All
            </Link>
            <Link to="/blocked" onClick={() => onClickHandler("your")}>
                Blocked
            </Link>
        </div>
    );
};

export default MainHeader;
