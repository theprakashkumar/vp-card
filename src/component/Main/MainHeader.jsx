import "./MainHeader.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { BsGrid, BsViewStacked } from "react-icons/bs";

const MainHeader = () => {
    const { currentTab, setTab, cardView, setCardView } =
        useContext(DataContext);
    const onClickHandler = (data) => {
        setTab(data);
    };
    const handleCardView = (view) => {
        setCardView(view);
    };
    return (
        <div className="main-header">
            <div className="main-header_left">
                <Link
                    to="/your"
                    className={`main-header_link ${
                        currentTab === "your" ? "main-header_link-active" : ""
                    }`}
                    onClick={() => onClickHandler("your")}
                >
                    Your
                </Link>
                <Link
                    to="/"
                    className={`main-header_link ${
                        currentTab === "all" ? "main-header_link-active" : ""
                    }`}
                    onClick={() => onClickHandler("all")}
                >
                    All
                </Link>
                <Link
                    to="/blocked"
                    className={`main-header_link ${
                        currentTab === "blocked"
                            ? "main-header_link-active"
                            : ""
                    }`}
                    onClick={() => onClickHandler("blocked")}
                >
                    Blocked
                </Link>
            </div>
            <div className="main-header_right">
                <BsGrid
                    className={`main-header_right_icon ${
                        cardView === "grid"
                            ? "main-header_right_icon-active"
                            : ""
                    }`}
                    onClick={() => handleCardView("grid")}
                />
                <BsViewStacked
                    className={`main-header_right_icon ${
                        cardView === "flex"
                            ? "main-header_right_icon-active"
                            : ""
                    }`}
                    onClick={() => handleCardView("flex")}
                />
            </div>
        </div>
    );
};

export default MainHeader;
