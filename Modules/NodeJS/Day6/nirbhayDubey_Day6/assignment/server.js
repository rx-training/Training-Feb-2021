const fs=require('fs');
const express=require('express');
const app=express();

const portno=3000;

function getStudents(){
    return new Promise(function(resolve,reject){
        fs.readFile('./students.json','utf8',(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

app.get('/students',(req,res)=>{
    getStudents()
    .then(
        function(data){
            res.send(data);
        },
        function(error){
            console.log(error);
        }
    );
});

app.get('/students/:id',(req,res)=>{
    getStudents()
    .then(
        function(data){
            res.send(data[req.params.id-1]);
        },
        function(error){
            console.log(error);
        }
    );
});

app.get('/students/:id/fees',(req,res)=>{
    getStudents()
    .then(
        function(data){
            res.send(data[req.params.id-1].Fees);
        },
        function(error){
            console.log(error);
        }
    );
});

app.get('/students/:id/result',(req,res)=>{
    getStudents()
    .then(
        function(data){
            res.send(data[req.params.id-1].Result);
        },
        function(error){
            console.log(error);
        }
    );
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.put('/student',(req,res)=>{
    getStudents()
    .then(
        function(data){
            let stuId=parseInt(req.body.stuId);
            let upMark=parseInt(req.body.upMark);
            for(let i=0;i<data.length;i++){
                if(data[i].ID==stuId){
                    data[i].Result.Eng=upMark;
                    break;
                }
            }
            fs.writeFile('./students.json',JSON.stringify(data),(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(`English marks updated for student-id ${stuId}`);
                res.end();
            });
        },
        function(error){
            console.log(error);
        }
    );
});

app.listen(portno,()=>{
    console.log(`Server running at port no ${portno}`);
});