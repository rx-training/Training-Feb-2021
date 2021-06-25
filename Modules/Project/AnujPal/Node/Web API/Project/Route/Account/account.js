const mongoose = require("mongoose")
const express = require('express')
const accountRouter = express.Router();
const account = require("../../Model/account");
const Account = mongoose.model('Account', account)
const verifyToken = require("../../Middleware/verifyToken");
const ensureToken = require("../../Middleware/ensureToken");
const miniStatement = require("../../Model/ministatement")
const MiniStatemet = mongoose.model('Statements', miniStatement)
const transporter1 = require("../../email/email")

class demoAccount {
    static async insertAccount(req, res) {
        const account = new Account({
            accountNo: req.body.accountNo, accountHolderName: req.body.accountHolderName, CIF: req.body.CIF, branchCode: req.body.branchCode, balance: req.body.balance
        })
        const a1 = account.save();
        res.json(account);
    }

    static async credit(req, res) {
        const account = await Account
            .updateOne({ accountNo: req.params.accountNo }, {

                $inc: {
                    balance: req.params.amount
                }
            })
        if (account.nModified == 1) {
            const statement = new MiniStatemet({
                date: new Date(),
                amount: req.params.amount
            })

            const a1 = statement.save();
            res.json(a1)

            transporter1.transporter.sendMail(transporter1.mailOptionsCredit, function (error, info) {
                if (error) {
                    console.log(error.message);
                } else {
                    console.log('Email sent: ' + info.response);


                }
            });
        }
        else {
            res.json("Error");
        }


    }
    static async debit(req, res) {
        const account = await Account
            .updateOne({ accountNo: req.params.accountNo }, {

                $inc: {
                    balance: -req.params.amount
                }
            })
        if (account.nModified == 1) {
            const statement = new MiniStatemet({
                date: new Date(),
                amount: req.params.amount
            })

            const a1 = statement.save();
            res.json(a1)
        }
        else {
            res.json("Error");
        }

    }

    static async miniStatement(req, res) {
        const statement = await MiniStatemet
            .find()
            .limit(10)
        res.json(statement)
    }

    static async NEFT(req,res){
    
       
       const debitAccount=await Account.updateOne({accountNo:req.body.debitAccount},{
           $inc :{
                balance:-parseInt(req.params.amount)
           }
       })
       const creditAccount=await Account.updateOne({accountNo:req.body.creditAccount},{
        $inc :{
             balance:req.params.amount
        }
    })
    res.json(creditAccount)
    }
   

   
}





// API for inserting the account information
accountRouter.post("/insertAccount",verifyToken, ensureToken, demoAccount.insertAccount)

// API for credit amount from the account
accountRouter.get("/credit/:accountNo/:amount", verifyToken, ensureToken, demoAccount.credit)

// API for debit amount from the account
accountRouter.get("/debit/:accountNo/:amount", verifyToken, ensureToken, demoAccount.debit)

// API for getting mini satatement for tranjaction
accountRouter.get("/miniStatement", verifyToken, ensureToken, demoAccount.miniStatement)

// API for NEFT
accountRouter.get("/NEFT/:amount", verifyToken, ensureToken, demoAccount.NEFT)
module.exports = accountRouter;