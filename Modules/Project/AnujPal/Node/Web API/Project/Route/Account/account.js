const mongoose = require("mongoose")
const express = require('express')
const accountRouter = express.Router();
// const account = require("../../Model/account");
// const Account = mongoose.model('Account', account)
const netbanking = require("../../Model/netbanking");
const NetBanking = mongoose.model("NetBanking", netbanking);
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
        const account = await NetBanking
            .updateOne({ accountNo: req.body.accountNo }, {

                $inc: {
                    balance: req.body.amount
                }
            })
        if (account.nModified == 1) {
            const statement = new MiniStatemet({
                date: new Date(),
                amount: req.body.amount,
                debitAccountNo:req.body.accountNo,
                creditAccountNo:req.body.accountNo,
                type:'Credit'
            })

            const a1 = await statement.save();
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
            res.json("Not Moddified");
        }


    }
    static async delete(req,res){
        const account=await NetBanking.deleteOne({accountNo:req.body.accountNo})
        res.json(account)
    }
    static async debit(req, res) {
        const account = await NetBanking
            .updateOne({ accountNo: req.body.accountNo }, {

                $inc: {
                    balance: -req.body.amount
                }
            })
        if (account.nModified == 1) {
            const statement = new MiniStatemet({
                date: new Date(),
                amount: req.body.amount,
                debitAccountNo:req.body.accountNo,
                creditAccountNo:req.body.accountNo,
                type:'Debit'
            })

            const a1 = await statement.save();
            res.json(a1)
        }
        else {
            res.json("Not Modified");
        }

    }

    static async miniStatement(req, res) {
        const statement = await MiniStatemet
            .find()
            .limit(10)
        res.json(statement)
    }

    static async NEFT(req,res){
    
       
       const debitAccount=await NetBanking.updateOne({accountNo:req.body.debitAccountNo},{
           $inc :{
                balance:-parseInt(req.body.amount)
           }
       })
       const creditAccount=await NetBanking.updateOne({accountNo:req.body.creditAccountNo},{
        $inc :{
             balance:req.body.amount
        }
    })
    if (creditAccount.nModified == 1) {
        const statement = new MiniStatemet({
            date: new Date(),
            amount: req.body.amount,
            debitAccountNo:req.body.debitAccountNo,
            creditAccountNo:req.body.creditAccountNo,
            type:'NEFT'
        })

        const a1 = await statement.save();
        res.json(a1)
    }
    res.json(creditAccount)
    }
   

   
}





// API for inserting the account information
accountRouter.post("/insertAccount",verifyToken, ensureToken, demoAccount.insertAccount)

// API for credit amount from the account
accountRouter.post("/credit",verifyToken,ensureToken, demoAccount.credit)

// API for debit amount from the account
accountRouter.post("/debit", verifyToken, ensureToken, demoAccount.debit)

// API for getting mini satatement for tranjaction
accountRouter.post("/miniStatement", verifyToken, ensureToken, demoAccount.miniStatement)

// API for NEFT
accountRouter.post("/NEFT", verifyToken, ensureToken, demoAccount.NEFT)

// API for DELETE
accountRouter.post("/delete",verifyToken,ensureToken,demoAccount.delete)
module.exports = accountRouter;