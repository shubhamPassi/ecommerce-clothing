import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import shopPage from "./pages/shopPage/shop.component";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/shop" component={shopPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
