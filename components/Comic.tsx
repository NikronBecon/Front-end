import { formatDistanceStrict } from "date-fns";

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

export default async function Comic(): Promise<React.JSX.Element> {
  const email = "n.tsukanov@innopolis.university";
  const id = await getComicId(email as string);
  const data = await getComicImage(id);
  const date = `${data.day}-${data.month}-${data.year}`;
  const imageLive = await getImageLifetime(
    new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day)),
  );
  const img = data.img;
  const alt = data.alt;
  const safe_title = data.safe_title;
  return (
    <div className="XKCDimage">
      <img src={img} id="XKCDimg" alt={alt} />
      <p id="imageTitle">{safe_title}</p>
      <p id="imageDate">{date}</p>
      <p id="imageLive">{"It was published " + imageLive + " ago."}</p>
    </div>
  );
}

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
