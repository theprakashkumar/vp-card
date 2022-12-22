import "./Cards.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { FilterContext } from "../../context/FilterContext";
import Card from "../Card/Card";

const Cards = ({ card }) => {
    const { contextFilters, searchText } = useContext(FilterContext);
    const { cardView } = useContext(DataContext);

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
        <div className={`cards cards-${cardView}`}>
            {searchResult.map((card) => (
                <Card
                    name={card.name}
                    budgetName={card.budget_name}
                    cardholder={card.card_holder}
                    cardType={card.card_type}
                    expiry={card.expiry}
                    limit={card.limit}
                    ownerId={card.owner_id}
                    spent={{
                        value: card.spent.value,
                        currency: card.spent.currency,
                    }}
                    availableToSpend={{
                        value: card.available_to_spend.value,
                        currency: card.available_to_spend.currency,
                    }}
                />
            ))}
        </div>
    );
};

export default Cards;
