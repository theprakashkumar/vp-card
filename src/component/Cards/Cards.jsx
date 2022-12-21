import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import Card from "../Card/Card";

const Cards = ({ card }) => {
    const { contextFilters } = useContext(FilterContext);

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

    const filteredCards = filterCards(card);

    return (
        <div>
            {filteredCards.map((card) => (
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
