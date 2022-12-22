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
                    <h4>{name}</h4>
                    <div>
                        <p>{cardholder}</p>
                        <span>•</span>
                        <p>{budgetName}</p>
                    </div>
                </div>
                <div className="card_header_right">
                    {cardType === "burner" ? (
                        <MdLocalFireDepartment />
                    ) : (
                        <MdAutorenew />
                    )}
                </div>
            </div>
            <div className="card_details">
                <div>{cardType === "burner" ? "Burner" : "Subscription"}</div>
                <div>
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
                    <span>Pink</span>
                    <spent>Spent</spent>
                    <spent>{`${spent.value} ${spent.currency}`}</spent>
                </div>
                <div className="card_credit-details_available">
                    <span>Green</span>
                    <spent>Available to spend</spent>
                    <spent>
                        {`${availableToSpend.value} ${availableToSpend.currency}`}
                    </spent>
                </div>
            </div>
        </div>
    );
};

export default Card;
