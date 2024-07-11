import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="Title">My Portfolio</div>
      <nav>
        <button>
          <Link href="/">Home</Link>
        </button>
        <button>
          <Link href="/xkcd">XKCD</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
