import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isCardLoading, setIsCardLoading] = useState(true);
    const [allCards, setAllCards] = useState({});
    const [currentTab, setCurrentTab] = useState("all");

    const setTab = (curTab) => {
        setCurrentTab(curTab);
    };
    useEffect(() => {
        const getCards = async () => {
            const cards = await axios.get(
                "https://raw.githubusercontent.com/ThePrakashKumar/vp-card-data/main/data.json"
            );
            console.log(cards.data.data);
            setAllCards(cards.data.data);
            setIsCardLoading(false);
        };
        getCards();
    }, []);
    return (
        <DataContext.Provider
            value={{ allCards, isCardLoading, currentTab, setTab }}
        >
            {children}
        </DataContext.Provider>
    );
};
