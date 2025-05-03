import jwt from "jsonwebtoken"


const authMiddleware = async(req, res, next)=>{
    const token = req.cookies.token || (req.headers.authrization && req.headers.authrization.split(" ")[1]);
    if(!token){
        return res.status(403).send("Unauthorized");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWTSecret);
        
        if(decoded.userId){
            req.userId = decoded.userId;
            next()
        }else{
            return res.status(403).json({})
        }
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
    
}

export default authMiddleware













// const user = await User.findById(decoded._id)
// if(!user){
//     return res.status(401).send("Unauthorized");
// }