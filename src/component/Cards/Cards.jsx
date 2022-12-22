import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import Card from "../Card/Card";

const Cards = ({ card }) => {
    const { contextFilters, searchText } = useContext(FilterContext);

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
