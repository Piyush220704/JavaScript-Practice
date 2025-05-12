import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add a first name"],
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        required: [true, "Please add an username"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please add a password"],
        minlength: [8, "Password must be at least 8 characters long"],
        match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        ],
    }

})

const User = mongoose.model("User", userSchema);
export default User;