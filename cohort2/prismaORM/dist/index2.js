"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "Piyush",
                age: 20,
                password: "Piyu$#2959",
            }
        });
    });
}
// createUser();
function createTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.todo.create({
            data: {
                title: "Learn Typescript",
                description: "Learn Typescript from scratch",
                done: false,
                user: {
                    connect: {
                        id: 1
                    }
                }
            }
        });
    });
}
// createTodo();
function updateTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.todo.update({
            where: {
                id: 1
            },
            data: {
                done: true
            }
        });
    });
}
// updateTodo();
function returnUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            include: {
                todo: true
            }
        });
        console.log(user);
    });
}
// returnUser();
