import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isCardLoading, setIsCardLoading] = useState(true);
    const [allCards, setAllCards] = useState({});
    const [currentTab, setCurrentTab] = useState("all");
    const [allUsers, setAllUsers] = useState([]);

    const setTab = (curTab) => {
        setCurrentTab(curTab);
    };
    useEffect(() => {
        const getCards = async () => {
            const cards = await axios.get(
                "https://raw.githubusercontent.com/ThePrakashKumar/vp-card-data/main/data.json"
            );
            setAllCards(cards.data.data);
            setIsCardLoading(false);
        };
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
            value={{ allCards, isCardLoading, currentTab, setTab, allUsers }}
        >
            {children}
        </DataContext.Provider>
    );
};
