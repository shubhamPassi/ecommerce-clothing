import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const hatsPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hats Page</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <Switch>
                <Route path="/hats" component={hatsPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
