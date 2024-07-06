import React from "react";
import { formatDistanceStrict } from "date-fns";

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

class Comic extends React.Component<ComicProps, ComicStates> {
    constructor(props: ComicProps) {
        super(props);
        this.state = {
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
            imageLive: ""
        };
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = async () => {
        const email = this.props.email;
        try {
            const id = await getComicId(email);
            const data = await getComicImage(id);
            this.setState({
                alt: data.alt,
                img: data.img,
                safe_title: data.safe_title,
                day: data.day,
                month: data.month,
                year: data.year
            });
            const date = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
            const formattedDate: string = date.toLocaleDateString();
            this.setState({ date: formattedDate });
            const imageLive = await getImageLifetime(date);
            this.setState({ imageLive: imageLive });
        } catch (error) {
            console.error("Error fetching comic data:", error);
        }
    };

    render() {
        return (
            <div className="XKCDimage">
                <img src={this.state.img} id="XKCDimg" alt={this.state.alt} />
                <p id="imageTitle">{this.state.safe_title}</p>
                <p id="imageDate">{this.state.date}</p>
                <p id="imageLive">{"It was published " + this.state.imageLive + " ago."}</p>
            </div>
        );
    }
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

export default Comic;
