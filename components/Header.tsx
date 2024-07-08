"use client";
import React from "react";
import Image from "next/image";
import tg from "../public/TelegramIcon.png";
import gmail from "../public/GmailIcon.png";
import git from "../public/GitHubIcon.png";

const Header: React.FC = () => {
  return (
    <header id="first">
      <h1>Nikita Tsukanov</h1>
      <div className="social">
        <a href="https://t.me/Nikron_Becon" id="tg-link">
          <Image src={tg} alt="Telegram"></Image>
        </a>
        <a href="mailto:nikronbecon@gmail.com" id="email">
          <Image src={gmail} alt="Gmail" />
        </a>
        <a href="https://github.com/NikronBecon" id="gh-link">
          <Image src={git} alt="Github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
