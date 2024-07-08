"use client";
import React from "react";
import Image from "next/image";
import tgIcon from "./img/TelegramIcon.png"
import gmailIcon from "./img/GmailIcon.png"
import gitIcon from "./img/GitHubIcon.png"


const Header: React.FC = () => {
  return (
    <header id="first">
      <h1>Nikita Tsukanov</h1>
      <div className="social">
        <a href="https://t.me/Nikron_Becon" id="tg-link">
          <Image src={tgIcon} alt="Telegram" />
        </a>
        <a href="mailto:nikronbecon@gmail.com" id="email">
          <Image src={gmailIcon} alt="Gmail" />
        </a>
        <a href="https://github.com/NikronBecon" id="gh-link">
          <Image src={gitIcon} alt="Github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
