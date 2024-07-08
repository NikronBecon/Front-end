"use client";
import React, { useState, useEffect } from "react";
import { formatDistanceStrict } from "date-fns";
import Image from "next/image";

interface ComicProps {
  email: string;
}

interface ComicStates {
  month: string;
  num: string;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
  date: string;
  imageLive: string;
}

const Comic: React.FC<ComicProps> = ({ email }) => {
  const [state, setState] = useState<ComicStates>({
    month: "",
    num: "",
    link: "",
    year: "",
    news: "",
    safe_title: "",
    transcript: "",
    alt: "",
    img: "",
    title: "",
    day: "",
    date: "",
    imageLive: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = await getComicId(email);
        const data = await getComicImage(id);
        setState({
          ...data,
          date: `${data.day}-${data.month}-${data.year}`,
          imageLive: await getImageLifetime(
            new Date(
              parseInt(data.year),
              parseInt(data.month) - 1,
              parseInt(data.day),
            ),
          ),
        });
      } catch (error) {
        console.error("Error fetching comic data:", error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="XKCDimage">
      <Image src={state.img} id="XKCDimg" alt={state.alt} />
      <p id="imageTitle">{state.safe_title}</p>
      <p id="imageDate">{state.date}</p>
      <p id="imageLive">{"It was published " + state.imageLive + " ago."}</p>
    </div>
  );
};

async function getComicImage(id: number): Promise<ComicStates> {
  const urlImage = new URL("https://fwd.innopolis.university/api/comic");
  const paramsId = new URLSearchParams();
  paramsId.append("id", id.toString());
  urlImage.search = paramsId.toString();

  const responseImage = await fetch(urlImage.toString());
  if (!responseImage.ok) {
    throw new Error("Failed to fetch comic image");
  }
  const data: ComicStates = await responseImage.json();
  return data;
}

async function getComicId(email: string): Promise<number> {
  const urlId = new URL("https://fwd.innopolis.university/api/hw2");
  const paramsEmail = new URLSearchParams();
  paramsEmail.append("email", email);
  urlId.search = paramsEmail.toString();

  const responseId = await fetch(urlId.toString());
  if (!responseId.ok) {
    throw new Error("Failed to fetch comic ID");
  }
  const id: number = await responseId.json();
  return id;
}

async function getImageLifetime(date: Date): Promise<string> {
  const now = Date.now();
  const relativeTime = formatDistanceStrict(now, date);
  return relativeTime;
}

export default Comic;
