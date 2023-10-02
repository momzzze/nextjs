import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";

// get all rooms  => /api/rooms
export const allRooms = async (req: NextRequest) => {
    const resPerPage: number = 8;

    const rooms = await Room.find();

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms,
    });
}

// create new  room  => /api/rooms
export const newRoom = async (req: NextRequest) => {
    const body = await req.json();

    const room = await Room.create(body);

    return NextResponse.json({
        success: true,
        room,
    });
}

// get room details => /api/admin/rooms/:id
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

// update room details => /api/admin/rooms/:id
export const updateRoom = async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body =await req.json();


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

    room = await Room.findByIdAndUpdate(params.id, body,{
        new: true
    });

    return NextResponse.json({
        success: true,
        room,
    })
}


// delete room => /api/admin/rooms/:id
export const deleteRoom = async (req: NextRequest, { params }: { params: { id: string } }) => {
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

    // TODO: Delete all images associated related to the room


    await room.deleteOne()

    return NextResponse.json({
        success: true,
    })
}