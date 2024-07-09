"use client";
import React from "react";
import Image from "next/image";
import tg from "../public/TelegramIcon.png"
import gmail from "../public/GmailIcon.png"
import git from "../public/GitHubIcon.jpg"

const Footer: React.FC = () => {
  return (
    <footer>
        <a href="https://t.me/Nikron_Becon" id="tg-link">
          <Image src={tg} alt="Telegram"></Image>
        </a>
        <a href="mailto:nikronbecon@gmail.com" id="email">
          <Image src={gmail} alt="Gmail" />
        </a>
        <a href="https://github.com/NikronBecon" id="gh-link">
          <Image src={git} alt="Github" />
        </a>
    </footer>
  );
};

export default Footer;
