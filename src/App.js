import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
