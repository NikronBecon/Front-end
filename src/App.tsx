import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import XKCD from "./components/XKCD";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Info></Info>
                <XKCD></XKCD>
            </div>
        );
    }
}

export default App