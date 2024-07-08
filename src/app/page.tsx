import Image from "next/image";
import Header from "../components/Header";
import Info from "../components/Info";
import XKCD from "../components/XKCD";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Info></Info>
      <XKCD></XKCD>
    </main>
  );
}
