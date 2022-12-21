import { Routes, Route } from "react-router-dom";
import Cards from "../Cards/Cards";
import MainHeader from "./MainHeader";
const Main = () => {
    return (
        <div>
            <MainHeader />
            <Routes>
                <Route path="/your" element={<Cards cardtype="Your" />} />
                <Route path="/" element={<Cards cardtype="all" />} />
                <Route path="/blocked" element={<Cards cardtype="bloked" />} />
            </Routes>
        </div>
    );
};

export default Main;
