import Link from 'next/link';


const Header = () => {
    return (
        <header>
            <div className="Title">My Portfolio</div>
            <nav>
                <button>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </button>
                <button>
                    <Link href="/xkcd">
                        <a>XKCD</a>
                    </Link>
                </button>
            </nav>
        </header>
    );
};

export default Header;
