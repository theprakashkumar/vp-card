const Card = ({ name, budget_name, owner_id, card_type }) => {
    return <div>{`${name}-${budget_name}-${owner_id}-${card_type}`}</div>;
};

export default Card;
