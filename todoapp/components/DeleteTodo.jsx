"use client";

import { useRouter } from "next/navigation";


async function DeleteTodo({ id }) {
    const router = useRouter();
    const dummyWait = await new Promise((resolve) => setTimeout(resolve, 3000));

    async function handleDelete() {
        const response = await fetch(`http://localhost:3000/api/todos`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id
            }),
        })
        const data = await response.json();
        if (response.ok) {
            router.refresh();
            router.push('/')
        } else {
            throw new Error(data.error);
        }
    }


    return <button onClick={handleDelete}>Delete</button>
}

export default DeleteTodo