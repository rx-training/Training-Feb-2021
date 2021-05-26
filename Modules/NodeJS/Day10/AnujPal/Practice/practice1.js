const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Day10', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("We are connected")
    }).catch((err) => {
        console.log("Error");
    });

    const empSchema=mongoose.Schema({
        ID : Number,
        Name : String,
        Address : String,
        Skills : [String] 
    });

    const Employee=mongoose.model('empcollection',empSchema);

    async function createEmp()
    {
        const emp = new Employee({
            ID : 2,
            Name : 'Shivam',
            Address : 'Sukhsagar Society,vatva,Ahmedabad',
            Skills : ['Html','Css','Bootsrap','Js']
        })

        const result=await emp.save();
        console.log(result);
    }
    createEmp();


