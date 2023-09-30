import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return [{id: "one"}, {id: "two"}]
}

function page({ params }) {
    if(parseInt(params.id) === 1){
        notFound();
    }
    return (
        <div>params id:{params.id}</div>
    )
}

export default page