import Link from 'next/link';
import './globals.css';
import NavBar from '../components/NavBar';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-amber-100 flex flex-col px-4 py-1 min-h-screen'>
                <header style={{ border: 'solid blue 1px' }}>
                    <NavBar />
                </header>
                <main className='grow py-3'>
                    {children}
                </main>
                <footer className='border-t py-3  text-center text-lg'>
                    Game data and images is from <a className='text-orange-800 hover:underline' href="https://www.rawg.io/">RAWG</a>
                </footer>
            </body>
        </html>
    );
}