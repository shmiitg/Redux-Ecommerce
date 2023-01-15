import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
