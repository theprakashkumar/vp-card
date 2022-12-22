import "./Card.css";
import { MdLocalFireDepartment, MdAutorenew } from "react-icons/md";
import CardGraph from "./CardGraph";

const Card = ({
    name,
    budgetName,
    cardholder,
    cardType,
    expiry,
    limit,
    ownerId,
    spent,
    availableToSpend,
}) => {
    return (
        <div className="card">
            <div className="card_header">
                <div className="card_header_left">
                    <h4 className="card_header_name">{name}</h4>
                    <div className="card_header_cardholder">
                        <p className="card_header_cardholder_text">
                            {cardholder}
                        </p>
                        <span className="card_header_cardHolder_dot">•</span>
                        <p className="card_header_cardholder_text">
                            {budgetName}
                        </p>
                    </div>
                </div>
                <div className="card_header_right">
                    {cardType === "burner" ? (
                        <MdLocalFireDepartment className="card_header_right_icon" />
                    ) : (
                        <MdAutorenew className="card_header_right_icon" />
                    )}
                </div>
            </div>
            <div className="card_details">
                <div className="card_details_cardType">
                    {cardType === "burner" ? "Burner" : "Subscription"}
                </div>
                <div className="card_details_date">
                    {`${cardType === "burner" ? "Expires" : "Limit"}`}:{" "}
                    {`${cardType === "burner" ? expiry : limit}`}
                </div>
            </div>
            <div className="card_graph">
                <CardGraph
                    spent={spent.value}
                    available={availableToSpend.value}
                />
            </div>
            <div className="card_credit-details">
                <div className="card_credit-details_spent">
                    <span className="card_credit-details_spend_dot card_credit-details_spend_dot-pink"></span>
                    <span className="card_credit-details_text card_credit-details_text-title">
                        Spent
                    </span>
                    <span className="card_credit-details_text">{`${spent.value} ${spent.currency}`}</span>
                </div>
                <div className="card_credit-details_available">
                    <span className="card_credit-details_spend_dot card_credit-details_spend_dot-green"></span>
                    <span className="card_credit-details_text card_credit-details_text-title">
                        Available to spend
                    </span>
                    <span className="card_credit-details_text">
                        {`${availableToSpend.value} ${availableToSpend.currency}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
