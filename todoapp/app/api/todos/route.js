import { NextResponse } from 'next/server';

let todos = [
    { id: 1, title: "Get Groceries" },
    { id: 2, title: "Get Gas" },
    { id: 3, title: "Get Milk" },
    { id: 4, title: "Get Bread" },
    { id: 5, title: "Do Homework" },
]

export async function GET() {
    return NextResponse.json({ todos });
}

export async function DELETE(request) {
    const data = await request.json();
    console.log(data);
    todos = todos.filter((todo) => todo.id !== data.id);
    return NextResponse.json({ data });
}

export async function POST(request) {
    const data = await request.json();
    todos.push({ id: todos.length + 1, title: data.title });
    return NextResponse.json({ todos });
}