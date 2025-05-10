import { PrismaClient } from "@prisma/client";
const Client = new PrismaClient();
async function createDummy(){
    await Client.user.create({
        data:{
            username : "Piyush Arora",
            age: 20,
            password: "Piyu$#2959",
            todo:{
                create:{
                    title: "Learn Prisma",
                    description: "Learn Prisma advance",
                    done: false,
                }
            }
        }
    })
}
createDummy();