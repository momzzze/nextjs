import Link from 'next/link';

export default function ReviewsLayout({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {children}
            </div>
        </div>
    );
}