// XKCD.js
import React from "react";
import Comic from "./Comic";

interface XKCDstates {
    pressed: boolean;
    email: string;
}
interface XKCDprops{

}

class XKCD extends React.Component<XKCDprops, XKCDstates> {
    constructor(props : XKCDprops) {
        super(props);
        this.state = {
            pressed: false,
            email: '',
        };
    }

    handleButtonClick= () => {
        this.setState({ pressed: true });
    };

    render() {
        return (
            <div className="XKCDcomic">
                <div id="XKCDform">
                    <form id="emailForm">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required onChange={(e) => this.setState({ email: e.target.value })} />
                        <button onClick={this.handleButtonClick} type="button">Get an image</button>
                    </form>
                </div>
                {this.state.pressed ? <Comic email={this.state.email}></Comic> : null}
            </div>
        );
    }
}

export default XKCD;
