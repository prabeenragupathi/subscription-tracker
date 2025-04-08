import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

 const authorize = async (req, res, next) => {
  try {
    let token;
    console.log(req.headers);

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if(!token) return res.status(401).json({success: false, message: "Unauthorized"});

    const decode = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decode.userId);

    if(!user) return res.status(401).json({success: false, message: "Unauthorized user not found"}); 

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default authorize;
