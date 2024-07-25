const express = require("express");
const app = express();
const z = require("zod");
const {User, Account} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const bcyrpt = require("bcryptjs");
const {authMiddleware} = require("../middleware");

const userRouter = express.Router();

const signupSchema = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    firstName : z.string().max(50),
    lastName : z.string().max(50)
})

const loginSchema = z.object({
    username : z.string().email(),
    password : z.string().min(6)
})

const updateSchema = z.object({
    password : z.string().min(6).optional(),            //optional() is used to make the field not required necessarily
    firstName : z.string().max(50).optional(),
    lastName : z.string().max(50).optional()
})


userRouter.get('/signup', async (req,res) =>{
    const user = req.body;
    const response = signupSchema.safeParse(user);
    if(response.success){
        const existingUser = await User.findOne({username : response.data.username});
        if(existingUser){
            res.status(411).send({error : "Username already exists"});
            res.end();

            //return res.status(411).send({error : "Username already exists"});
            //
        }else{
            response.data.password = await bcyrpt.hash(response.data.password, 10);;

            const newUser = new User(response.data);
            newUser.save();

            await Account.create({
                userId : newUser._id,
                balance : 1 + Math.random()*10000
            })

            const userId = newUser._id;
            const token = jwt.sign( {userId}, JWT_SECRET);
            res.status(200).send({
                "message" : "User created successfully",
                "token" : token
            })
            res.end();
        }
    }else{
        res.send(response.error.issues[0].message);
        res.end();
    }
})

userRouter.get('/login', async (req,res) =>{
    const response = loginSchema.safeParse(req.body);
    if(!response.success){
        return res.status(400).send(response.error.issues[0].message);
    }

    const user = req.body;
    const __user = await User.findOne({username : user.username});
    if(!__user){
        return res.status(401).send({
            "error" : "User not found",
        })
    }
    console.log(__user);
    if(await bcyrpt.compare(user.password, __user.password) && __user){
        const userId = __user._id;
        const token = jwt.sign({userId}, JWT_SECRET);
        res.status(200).send({
            "message" : "User loggen in successfully",
            "token" : token
        })
        res.end();
    }
    else{
        res.status(401).send({
            "error" : "Invalid username or password"
        })
    }
})

userRouter.put('/',authMiddleware,async (req,res) =>{
    const response = updateSchema.safeParse(req.body);
    if(!response.success){
        return res.status(401).send(response.error.issues[0].message);
    }
    const user = req.body;
    if(user.password){
        user.password = await bcyrpt.hash(user.password,10);
    }
    await User.updateOne({_id : req.userId}, user);
    return res.status(200).send({
        "message" : "User updated successfully"
    })

})

userRouter.get('/bulk', authMiddleware, async(req,res) =>{
    const param = req.query.filter || '';
    const user = await User.find({
        $or : [
            {firstName : {
                "$regex" : param,
            }},
            {lastName : {
                "$regex" : param,
            }}
        ]
    })
    .select({
        firstName : 1,
        lastName : 1,
        _id : 1
    })
    res.status(200).send(user);
})
module.exports = userRouter;