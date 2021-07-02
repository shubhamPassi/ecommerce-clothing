import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import shopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/shop" component={shopPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
