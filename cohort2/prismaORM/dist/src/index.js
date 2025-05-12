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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({});
    res.send(users);
}));
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield client.user.findUnique({
        where: { id: Number(id) }
    });
    res.send(user);
}));
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, age, password } = req.body;
    try {
        yield client.user.create({
            data: {
                username,
                age: Number(age),
                password
            }
        });
    }
    catch (error) {
        console.log(error);
    }
    res.send("User created");
}));
app.listen(3000);
