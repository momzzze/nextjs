import User from "@/models/user";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: any) => {
    const { email, password } = await req.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return new NextResponse('User already exists', {
            status: 400,
        })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        email,
        password: hashedPassword,
    });

    try {

        await newUser.save();

        return new NextResponse('User created successfully', {
            status: 200,
        })

    } catch (error: any) {
        return new NextResponse(error, {
            status: 500,
        })
    }
}
