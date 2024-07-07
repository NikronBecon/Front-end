import React from "react";
import Image from 'next/image';


const Header: React.FC = () => {
    return (
        <header id="first">
            <h1>Nikita Tsukanov</h1>
            <div className="social">
                <a href="https://t.me/Nikron_Becon" id="tg-link">
                    <Image src="/img/TelegramIcon.png" alt="Telegram" />
                </a>
                <a href="mailto:nikronbecon@gmail.com" id="email">
                    <Image src="/img/GmailIcon.png" alt="Gmail" />
                </a>
                <a href="https://github.com/NikronBecon" id="gh-link">
                    <Image src="/img/GitHubIcon.png" alt="Github" />
                </a>
            </div>
        </header>
    );
};

export default Header;
