const fs=require('fs');
const express=require('express');
const app=express();

let portno=3000;

app.get('/customers',(req,res)=>{
    fs.readFile('./customers.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.get('/customers/:id',(req,res)=>{
    fs.readFile('./customers.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let custJson=JSON.parse(data);
        res.send(custJson[req.params.id-1]);
    });
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/customer',(req,res)=>{
    let newCustomer={
        "custId":parseInt(req.body.custId),
        "custName":req.body.custName,
        "custAge":parseInt(req.body.custAge),
        "custCity":req.body.custCity,
        "custContact":req.body.custContact,
        "custZip":req.body.custZip 
    }
    fs.readFile('./customers.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let custJson=JSON.parse(data);
        custJson.push(newCustomer);
        fs.writeFile('./customers.json',JSON.stringify(custJson),(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Data Inserted Successfully...');
            res.end();
        });
    });
});

app.put('/customer',(req,res)=>{
    fs.readFile('./customers.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let custJson=JSON.parse(data);
        let custId=req.body.custId;
        let custChangeName=req.body.custName;
        let i;
        for (i=0;i<custJson.length;i++) {
            if(custJson[i].custId==custId){
                custJson[i].custName=custChangeName;
                break;
            }
        }
        fs.writeFile('./customers.json',JSON.stringify(custJson),(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`Customer id ${custId} Name Updataed Successfully to ${custChangeName}..`);
            res.end();
        });
    })
});

app.delete('/customer',(req,res)=>{
    fs.readFile('./customers.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let custJson=JSON.parse(data);
        let custId=req.body.custId;
        for (i=0;i<custJson.length;i++) {
            if(custJson[i].custId==custId){
                custJson.splice(i,1);
                break;
            }
        }
        fs.writeFile('./customers.json',JSON.stringify(custJson),(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`Customer with Id:${custId} deleted successfully.`);
            res.end();
        });
    });
});

app.listen(portno,()=>{
    console.log(`Server is running on port no. ${portno}`);
});