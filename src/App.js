import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";
import { DataProvider } from "./context/DataProvider";
import { FilterProvider } from "./context/FilterContext";

function App() {
    return (
        <BrowserRouter>
            <DataProvider>
                <FilterProvider>
                    <Navbar />
                    <Main />
                </FilterProvider>
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;
