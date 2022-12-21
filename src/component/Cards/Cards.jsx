import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Card from "../Card/Card";

const Cards = ({ card }) => {
    const { allCards, isCardLoading } = useContext(DataContext);
    return (
        <div>
            {card.map((card) => (
                <Card
                    name={card.name}
                    budget_name={card.budget_name}
                    owner_id={card.owner_id}
                    card_type={card.status}
                />
            ))}
        </div>
    );
};

export default Cards;
