const Card = ({
    name,
    budget_name,
    owner_id,
    card_type,
    c_type,
    card_holder,
}) => {
    return (
        <div>{`${name}-${budget_name}-${owner_id}-${card_type}-${c_type}-${card_holder}`}</div>
    );
};

export default Card;
