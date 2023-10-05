import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='flex flex-col px-4 py-1 min-h-screen'>
                <header style={{ border: 'solid blue 1px' }}>
                    <nav>
                        <ul className='flex pl-3 gap-2'>
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
                <main className='grow py-3'>
                    {children}
                </main>
                <footer className='border-t py-3  text-center text-lg'>
                    Game data and images is from <a href="https://www.rawg.io/">RAWG</a>
                </footer>
            </body>
        </html>
    );
}