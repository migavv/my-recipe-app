import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/Recipe";

function App() {
    return (
        <Router basename="/my-recipe-app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
            </Routes>
        </Router>
    );
}

export default App;
