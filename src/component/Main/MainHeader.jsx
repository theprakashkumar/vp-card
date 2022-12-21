import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <div>
            <Link to="/your">Your</Link>
            <Link to="/all">All</Link>
            <Link to="/blocked">Blocked</Link>
        </div>
    );
};

export default MainHeader;
