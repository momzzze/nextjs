import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";

// get all rooms  => /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
    const resPerPage: number = 8;

    const rooms = await Room.find();

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms,
    });
})

// create new  room  => /api/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();

    const room = await Room.create(body);
    return NextResponse.json({
        success: true,
        room,
    });
})

// get room details => /api/admin/rooms/:id
export const getRoomDetails = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {

    const room = await Room.findById(params.id);
    if (!room) {
        throw new ErrorHandler("Room not found with this ID", 404);
    }
    return NextResponse.json({
        success: true,
        room,
    });
})

// update room details => /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body = await req.json();


    if (!room) {
        throw new ErrorHandler("Room not found with this ID", 404);
    }

    room = await Room.findByIdAndUpdate(params.id, body, {
        new: true
    });

    return NextResponse.json({
        success: true,
        room,
    })
})


// delete room => /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);


    if (!room) {
        throw new ErrorHandler("Room not found with this ID", 404);
    }

    // TODO: Delete all images associated related to the room


    await room.deleteOne()

    return NextResponse.json({
        success: true,
    })
})