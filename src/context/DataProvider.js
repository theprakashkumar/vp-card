import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isCardLoading, setIsCardLoading] = useState(true);
    const [allCards, setAllCards] = useState([]);
    const [currentTab, setCurrentTab] = useState("all");
    const [allUsers, setAllUsers] = useState([]);
    const [cardView, setCardView] = useState("grid");
    const [page, setPage] = useState(1);
    const [hasMoreCards, setHasMoreCards] = useState(true);

    const setTab = (curTab) => {
        setCurrentTab(curTab);
    };

    const getCards = async () => {
        try {
            const response = await axios.get(
                `https://raw.githubusercontent.com/ThePrakashKumar/vp-card-data/main/data${page}.json`
            );
            if (response) {
                if (page === 3) {
                    setHasMoreCards(false);
                }
                setAllCards([...allCards, ...response.data.data]);
                setIsCardLoading(false);

                setPage((page) => setPage(page + 1));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        if (!isCardLoading) {
            const userList = allCards.map((card) => card.card_holder);
            console.log({ userList });
            setAllUsers([...new Set(userList)]);
        }
    }, [allCards]);
    return (
        <DataContext.Provider
            value={{
                allCards,
                isCardLoading,
                currentTab,
                setTab,
                allUsers,
                cardView,
                setCardView,
                getCards,
                hasMoreCards,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
