import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import Account from "../models/account.model.js";
import zod from "zod";


const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string().optional(),
})
const signup = async (req, res)=>{
    const body = req.body;
    if(!body.username || !body.password || !body.firstName  ){
        return res.status(400).send("Please provide username and password")
    }
    const {success} = signupBody.safeParse(body);
    if(!success){
        return res.status(400).send("Please provide valid username and password")
    }
    if(await User.findOne({username: body.username})){
        return res.status(400).send("user already exists");
    }
    const user = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance : 1 + Math.random()*10000
    })

    const token = jwt.sign({userId}, process.env.JWTSecret)
    res.cookie('token', token, {
        httpOnly: true,     
        secure: true,       
        sameSite: 'Strict', 
        maxAge: 60 * 60 * 1000    
    });

    res.json({
        token: token,
        msg : "user created successfully"
    })
}

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

const update = async (req, res)=>{
    const body = req.body;
    const {success} = updateBody.safeParse(body);
    if(!success){
        return res.status(400).send("Please provide valid details")
    }
    await User.updateOne({_id: req.userId}, {$set: body})
    res.json({
        msg: "user updated successfully"
    })
}

const bulk = async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        _id: { $ne: req.userId },
        $or: [
            {
                firstName: {
                    "$regex": filter,
                }
            },
            {
                lastName: {
                    "$regex": filter
                }
            }
        ]
    })
    res.json({
        users: users.map(user=>({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            _id: user._id
        }))
    })
}

const signinBody = zod.object({
    username : zod.string(),
    password : zod.string()
})

const signin = async (req, res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password,
    })
    if(!user){
        return res.status(411).json({
            message: "error while logging"
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, process.env.JWTSecret)

    res.cookie('token', token, {
        httpOnly: true,     
        secure: true,       
        sameSite: 'Strict', 
        maxAge: 60 * 60 * 1000
    })
    return res.json({
        token: token
    })
}

const logout = (req, res)=>{
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0), 
        sameSite: "Lax",
        secure: false,
      });
      return res.status(200).json({ message: "Logged out successfully" });
}


export {
    signup,
    update,
    bulk,
    signin,
    logout
}