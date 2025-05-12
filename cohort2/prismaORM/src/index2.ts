import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

async function createUser(){
    await client.user.create({
        data:{
            username : "Piyush",
            age: 20,
            password: "Piyu$#2959",
        }
    })
}
// createUser();

async function createTodo(){
    await client.todo.create({
        data:{
            title: "Learn Typescript",
            description: "Learn Typescript from scratch",
            done: false,
            user:{
                connect:{
                    id: 1
                }
            }
        }
    })
}
// createTodo();

async function updateTodo(){
    await client.todo.update({
        where: {
            id: 1
        },
        data:{
            done: true
        }
    })
}
// updateTodo();

async function returnUser(){
    const user = await client.user.findFirst({
        where:{
            id: 1
        },
        include:{
            todo: true
        }
    })
    console.log(user);
}
// returnUser();