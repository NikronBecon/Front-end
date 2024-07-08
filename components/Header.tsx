"use client";
import React from "react";
import Image from "next/image";
import tg from "../public/TelegramIcon.jpg";
import gmail from "../public/GmailIcon.jpg";
import git from "../public/GitHubIcon.jpg";

const Header: React.FC = () => {
  return (
    <header id="first">
      <h1>Nikita Tsukanov</h1>
      <div className="social">
        <a href="https://t.me/Nikron_Becon" id="tg-link">
          <Image src={tg} alt="Telegram"></Image>
        </a>
        <a href="mailto:nikronbecon@gmail.com" id="email">
          <Image src="../public/GmailIcon.jpg" alt="Gmail" />
        </a>
        <a href="https://github.com/NikronBecon" id="gh-link">
          <Image src={git} alt="Github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
