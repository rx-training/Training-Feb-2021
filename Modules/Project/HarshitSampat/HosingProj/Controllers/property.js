// import modules
const {Property} = require('../Models/PropertyModel')

//get the property

exports.getProperty = async (req,res)=>{
    if(req.params.id){
    //add property
    const getProperty = Property.findById(req.params.Id)
    if(!getProperty) res.status(400).send('Could not get what you want')
    
    res.send(getProperty)

    }
    else{
        //get all property
        const getproperty = property.find()
        res.send(getproperty)
    }
}
// add new property
exports.addNewProperty = async (req,res)=>{
        
    const addNewProperty = new Property({
        User : req.body.User,
        Address: req.body.Address,
        Property_Type: req.body.Property_Type,
        Bhk: req.body.bhk,
        Image:req.body.image
    })
    //save to databese
    await addNewProperty.save()

    //reponse
    res.send(addNewProperty)
}