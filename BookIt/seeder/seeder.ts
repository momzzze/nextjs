import Room from "../backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";


const seedRooms = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/BookIt");
        await Room.deleteMany();
        console.log("Rooms are deleted");
        
        await Room.insertMany(rooms);
        console.log("All Rooms are added");

        process.exit();

    } catch (error) {
        console.log(error);
        process.exit();
    }
}

seedRooms();