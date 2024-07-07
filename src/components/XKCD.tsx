// XKCD.tsx
"use client"
import React, { useState } from "react";
import Comic from "./Comic";

const XKCD: React.FC = () => {
    const [pressed, setPressed] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const handleButtonClick = () => {
        setPressed(true);
    };

    return (
        <div className="XKCDcomic">
            <div id="XKCDform">
                <form id="emailForm">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleButtonClick} type="button">Get an image</button>
                </form>
            </div>
            {pressed && <Comic email={email}></Comic>}
        </div>
    );
};

export default XKCD;
