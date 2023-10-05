import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header style={{ border: 'solid blue 1px' }}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer style={{ border: 'solid green 1px' }}>
                    Game data and images is from <a href="https://www.rawg.io/">RAWG</a>
                </footer>
            </body>
        </html>
    );
}