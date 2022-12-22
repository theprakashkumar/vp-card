import "./Cards.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { FilterContext } from "../../context/FilterContext";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Cards = ({ card }) => {
    const { contextFilters, searchText } = useContext(FilterContext);
    const { cardView, getCards, hasMoreCards } = useContext(DataContext);

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
            <InfiniteScroll
                dataLength={card}
                next={getCards}
                hasMore={hasMoreCards}
                endMessage={
                    searchResult.length !== 0 && (
                        <div className="cards_message">
                            <h4>You Have Seen All</h4>
                        </div>
                    )
                }
            >
                {searchResult.length !== 0 ? (
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
                ) : (
                    <div className="cards_nothing-found">
                        <h4>Nothing Matches!</h4>
                    </div>
                )}
            </InfiniteScroll>
        </div>
    );
};

export default Cards;
