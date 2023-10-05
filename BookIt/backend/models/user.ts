import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    name: string
    email: string
    password: string
    avatar: {
        public_uid: string
        url: string
    }
    role: string
    createdAt: Date
    resetPasswordToken: string
    resetPasswordExpire: Date
}

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Your password must be longer than 6 characters"],
        select: false,
    },
    avatar: {
        public_uid: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

//encrypting password before saving user
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }

    this.password=await bcrypt.hash(this.password, 10);
});

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);