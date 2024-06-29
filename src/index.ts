import { formatDistanceStrict } from "date-fns";

interface ComicData {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

document.getElementById('emailForm')!.addEventListener('submit', showImage);

async function showImage(event: Event): Promise<void> {
    event.preventDefault();
    const email = (document.getElementById('e-mail') as HTMLInputElement).value;
    const id = await getComicId(email);
    const data: ComicData = await getComicImage(id);

    const alt = data.alt;
    const img = data.img;
    const safe_title = data.safe_title;
    const day = parseInt(data.day);
    const month = parseInt(data.month) - 1;
    const year = parseInt(data.year);
    const date = new Date(year, month, day);
    const formattedDate = date.toLocaleDateString();
    const imgLive = await getImageLifetime(date);

    const XKCDimg = document.getElementById("XKCDimg") as HTMLImageElement;
    XKCDimg.src = img;
    XKCDimg.alt = alt;
    document.getElementById("imageTitle")!.innerText = safe_title;
    document.getElementById("imageDate")!.textContent = formattedDate;
    document.getElementById("imageLive")!.textContent = imgLive;
}

async function getComicImage(id: number): Promise<ComicData> {
    const urlImage = new URL("https://fwd.innopolis.university/api/comic");
    const paramsId = new URLSearchParams();
    paramsId.append("id", id.toString());
    urlImage.search = paramsId.toString();

    const responseImage = await fetch(urlImage.toString());
    if (!responseImage.ok) {
        throw new Error("Failed to fetch comic image");
    }
    const data: ComicData = await responseImage.json();
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
    return `${relativeTime} ago the comic was released.`;
}
