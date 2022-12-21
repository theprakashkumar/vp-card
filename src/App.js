import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";
import { DataProvider } from "./context/DataProvider";

function App() {
    return (
        <BrowserRouter>
            <DataProvider>
                <Navbar />
                <Main />
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;
