const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());
const cources=require("./routes/cources");
const home=require("./routes/home");
app.use("./api/cources",cources);
app.use("/",home);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});

function validateCource() {
    const schema =
    {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(cource, schema);
}