import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import Card from "../Card/Card";

const Cards = ({ card }) => {
    const { contextFilters } = useContext(FilterContext);
    const [searchText, setSearchText] = useState("");

    const filterCards = (cards) => {
        return cards
            .filter((card) =>
                contextFilters.category.length === 0
                    ? card
                    : contextFilters.category.includes(card.card_type)
            )
            .filter((card) =>
                !contextFilters.cardholder
                    ? card
                    : card.card_holder === contextFilters.cardholder
            );
    };

    const searchCards = (cards) => {
        return searchText !== ""
            ? cards.filter((card) =>
                  card.name.toLowerCase().includes(searchText)
              )
            : cards;
    };

    const filteredCards = filterCards(card);
    const searchResult = searchCards(filteredCards);

    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Card"
            />

            {searchResult.map((card) => (
                <Card
                    name={card.name}
                    budget_name={card.budget_name}
                    owner_id={card.owner_id}
                    card_type={card.status}
                    c_type={card.card_type}
                    card_holder={card.card_holder}
                />
            ))}
        </div>
    );
};

export default Cards;
