import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Cards from "../Cards/Cards";
import MainHeader from "./MainHeader";
import { DataContext } from "../../context/DataProvider";
import Filter from "../Filter/Filter";

const Main = () => {
    const { allCards, isCardLoading } = useContext(DataContext);

    const yourCards =
        !isCardLoading && allCards.filter((card) => card.owner_id === 8);
    const blockedCards =
        !isCardLoading && allCards.filter((card) => card.status === "blocked");

    return (
        <div>
            <MainHeader />
            <Filter />
            {isCardLoading ? (
                <div>Loading</div>
            ) : (
                <Routes>
                    <Route path="/your" element={<Cards card={yourCards} />} />
                    <Route path="/" element={<Cards card={allCards} />} />
                    <Route
                        path="/blocked"
                        element={<Cards card={blockedCards} />}
                    />
                </Routes>
            )}
        </div>
    );
};

export default Main;
