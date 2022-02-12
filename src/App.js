import React, {Component} from "react";
import NewWork from "./components/NewWork";
import TheBest from "./components/TheBest";

class App extends Component {
    render() {
        return (
            <div>
                <h1>App component</h1>
                <NewWork />
                <TheBest />
            </div>

        )
    }
}

export default App;
