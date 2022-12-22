import "./Navbar.css";
import { FiVideo, FiPlus } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_left">
                <h1 className="navbar_left_brand">Virtual cards</h1>
                <a href="#" className="navbar_left_link">
                    <FiVideo className="navbar_left_link_icon" />
                    <span className="navbar_left_link_text">Learn more</span>
                </a>
            </div>
            <div className="navbar_right">
                <button className="navbar_right_button">
                    <FiPlus />
                    <span className="navbar_right_button_text">
                        Virtual card
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
