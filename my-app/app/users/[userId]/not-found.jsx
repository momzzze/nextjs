import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">

            <div className="p-8 rounded-lg shadow-md bg-zinc-900">
                <h1 className="flex items-center justify-center text-red-600 text-[4rem] p-5 mb-11 font-bold">404 Error</h1>
                <p className="flex items-center justify-center text-gray-400">The page you are looking for does not exist.</p>
                <Link href="/" className="flex items-center justify-center  text-blue-500 hover:underline mt-4 ">Go back to the homepage</Link>
            </div>
        </div>
    )
}
