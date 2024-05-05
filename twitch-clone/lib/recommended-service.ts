
import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {

    let userId;

    try {
        const self = await getSelf();
        userId = self.id;
    } catch (e) {
        userId = null;
    }
    let users=[];

    if(userId){
        users=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            },
            where:{
                NOT:{
                    id:userId
                }
            }
        })
    }else{
        await new Promise((resolve) => setTimeout(resolve, 2000));
        users=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
    }

   

    return users
}
