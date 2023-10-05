import Link from 'next/link';

export default function ReviewsLayout({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: 'solid red 1px' }}>
                <ul>
                    <li>
                        <Link href='/reviews/hollow-knight'>Hollow Knight</Link>
                    </li>
                    <li>
                        <Link href='/reviews/stardew-valley'>Stardew Valley</Link>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}