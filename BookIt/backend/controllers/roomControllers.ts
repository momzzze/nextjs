import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";


export const allRooms = async (req: NextRequest) => {
    const resPerPage: number = 8;

    const rooms = await Room.find();

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms,
    });
}


export const newRoom = async (req: NextRequest) => {
    const body = await req.json();

    const room = await Room.create(body);

    return NextResponse.json({
        success: true,
        room,
    });
}


export const getRoomDetails = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);

    if (!room) {
        return NextResponse.json({
            success: false,
            message: "Room not found with this ID",
        }, { status: 404 });

        // .status(404).json({
        //     success: false,
        //     message: "Room not found with this ID",
        // });
    }
    return NextResponse.json({
        success: true,
        room,
    })
}