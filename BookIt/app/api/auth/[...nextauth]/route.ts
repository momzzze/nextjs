import dbConnect from "@/backend/config/dbConnect";
import User, { IUser } from "@/backend/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

type Credentials = {
    email: string
    password: string
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        session: {
            strategy: "jwt"
        },
        providers: [
            CredentialProvider({
                //@ts-ignore
                async authorize(credentials: Credentials) {
                    dbConnect();

                    const { email, password } = credentials;
                    const user = await User.findOne({ email }).select("+password");

                    if (!user) {
                        throw new Error("Invalid Email or Password");
                    }

                    const isPasswordMatched = await bcrypt.compare(password, user.password);

                    if (!isPasswordMatched) {
                        throw new Error("Invalid Email or Password");
                    }
                    return user;
                }
            })
        ],
        callbacks: {
            jwt: async ({ token, user }) => {

                user && (token.user = user);
                //TODO -update session when user is updated
                return token;
            },
            session: async ({ session, token }) => {
                session.user = token.user as IUser;
                // @ts-ignore
                delete  session?.user?.password;

                return session;
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
    })
}

export { auth as GET, auth as POST }