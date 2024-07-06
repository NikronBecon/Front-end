import React from "react";



class Header extends React.Component {
    render() {
        return (
            <header id="first">
                <h1>Nikita Tsukanov</h1>
                <div className="social">
                    <a href="https://t.me/Nikron_Becon" id="tg-link">
                        <img src="/img/TelegramIcon.png" alt="Telegram"/>
                    </a>
                    <a href="mailto:nikronbecon@gmail.com" id="email">
                        <img src="/img/GmailIcon.png" alt="Gmail"/>
                    </a>
                    <a href="https://github.com/NikronBecon" id="gh-link">
                        <img src="/img/GitHubIcon.png" alt="Github"/>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header