const express = require("express");
const app = express();
const {Account} = require("../db");

const accountRouter = express.Router();

accountRouter.get('/balance', authMiddleware, async (req,res) =>{
    const userId = req.userId;
    const account = await Account.findOne({userId});
    res.json({balance : account.balance});
})
accountRouter.post('/transfer', authMiddleware, async (req,res) =>{

    //********    BAD SOLUTION  ********/
    
    
    // const {to, amount} = req.body;

    // const account = Account.findOne({userId : req.userId});
    // if(account.balance < amount){
    //     return res.status(400).send({error : "Insufficient Balance"});
    // }

    // const toAccount = Account.findOne({userId : to});
    // if(!toAccount){
    //     return res.status(400).send({error : "Invalid Account"});
    // }

    // await Account.findOneAndUpdate({userId : req.userId},{
    //     $inc : {
    //         balance : -amount,
    //     }
    // })
    // await Account.findOneAndUpdate({userId : to},{
    //     $inc : {
    //         balance : amount,
    //     }
    // })
    // res.json({
    //     message : "Amount transferrred successfully"
    // })

    /**********     GOOD SOLUTION     ******************/
})

module.exports = accountRouter;