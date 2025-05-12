import Account from '../models/account.model.js'
import mongoose from 'mongoose';
const getBalance = async(req, res)=>{
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
}

const transfer = async (req, res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount, to} = req.body;

    //fetch the form account from database
    const account = await Account.findOne({userId : req.userId}).session(session);

    if(!account || account.balance < amount){
        session.abortTransaction();
        return res.status(400).json({
            message: "insufficient balance",
        })
    }

    const toAccount = await Account.findOne({userId : to}).session(session);

    if(!toAccount){
        session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account",
        })
    }

    await Account.updateOne({userId: req.userId}, {
        $inc: {
            balance: -amount
        }
    }).session(session);

    await Account.updateOne({userId: to}, {
        $inc: {
            balance: amount
        }
    }).session(session);

    await session.commitTransaction();
    await session.endSession();
    console.log("transaction committed")
    return res.json({
        message: "transfer successful"
    })

}

export {
    getBalance,
    transfer
}