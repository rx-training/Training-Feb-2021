// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Zomato',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));
// Create Schemas

const foodSchema = new mongoose.Schema({
    Food_ID:{
        type: String,
        required: true
    },
    Food_Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    Food_Price: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Food_Type: ['veg', 'nonveg'] ,
    
    Food_Details : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    }      
});
const Food = mongoose.model('Food', restaurantSchema)

module.exports = Food

async function createFood() {
    const r1= new Food({
                Food_ID : 'F101',
                Food_Name : 'Pau-Bhaji',
                Food_Price : 90,
                Food_Type : ['veg'],
                Food_Details : '2 Pau with Bhaji'
            }),
    const r2= new Food({
                Food_ID : 'F102',
                Food_Name : 'Paneer Pizza',
                Food_Price : 200,
                Food_Type : ['veg'],
                Food_Details : 'Pizza'
            }),
    const r3= new Food({
                Food_ID : 'F103',
                Food_Name : 'Grill Sandwitch',
                Food_Price : 100,
                Food_Type : ['veg'],
                Food_Details : 'Sandwitch'
            }),
    const r4= new Food({
                Food_ID : 'F104',
                Food_Name : 'Chocolate',
                Food_Price : 100,
                Food_Type : ['veg'],
                Food_Details : 'Family Pack'           
            }),
    const r5= new Restaurant({
       
                Food_ID : 'F101',
                Food_Name : 'Garlic Bread',
                Food_Price : 100,
                Food_Type : ['veg'],
                Food_Details : '2 Garlic Bread'
            }),
    const r6= new Restaurant({
            
                Food_ID : 'F102',
                Food_Name : 'Burger',
                Food_Price : 70,
                Food_Type : ['veg'],
                Food_Details : 'Regular Burger'
            }),
    const r7= new Restaurant({
                Food_ID : 'F103',
                Food_Name : 'Burger',
                Food_Price : 150,
                Food_Type : ['nonveg'],
                Food_Details : 'Nonveg Burger'
            }),
    const r8= new Restaurant({
                Food_ID : 'F104',
                Food_Name : 'French Fries',
                Food_Price : 100,
                Food_Type : ['veg'],
                Food_Details : 'Small'
                
    });
    try{
        const result = await r2.save();
        console.log(result);
    }
     catch(ex){
         for(field in ex.errors)
            console.log(ex.errors[field].message);
     } 
}
createRestaurant();