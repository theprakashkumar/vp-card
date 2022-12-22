import "./CardGraph.css";
const CardGraph = ({ spent, available }) => {
    const availablePercentage = (available / (available + spent)) * 100;
    const spentPercentage = (spent / (available + spent)) * 100;
    return (
        <div className="card-graph">
            <div
                className="card-graph_spent"
                style={{
                    width: `${Math.round(spentPercentage)}%`,
                }}
            ></div>
            <div
                className="card-graph_available"
                style={{
                    width: `${Math.round(availablePercentage)}%`,
                }}
            ></div>
        </div>
    );
};

export default CardGraph;
