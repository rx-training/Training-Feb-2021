const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Magicbricks" , {useNewUrlParser : true ,  useUnifiedTopology: true })
        .then(() => console.log("connected to MongoDB.."))
        .catch(err => console.log("Could't connect to MongoDB..",err))

// const userSchema = new mongoose.Schema({
//     UserID : Number,
// 	User_Type : String,
// 	UserName : String,
// 	User_Mobile_No : Number,
// 	User_Email : String,
// 	User_Password : String
// })

// const User = mongoose.model('User',userSchema)

// //-------------------------------------------------------
// const addressSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Address_1_2 : String,
// 	Town : String,
// 	City : String,
// 	States : String,
// 	Pincode : Number
// })

// const Address = mongoose.model("Address",addressSchema)

//------------------------------------------------------------
const propertySchema = new mongoose.Schema({
    Property_Type_id : Number,
	Property_Name : String,
	Property_Type_Name : String,
    Property_BHK : Number,
	Property_City : String,
	Property_Address : String,
	Property_Explore : String,
	Property_Owner_Name : String,
	Property_Marketer : String 
})

const Property = mongoose.model("Property",propertySchema)

async function post() {
    const user = new Property({
        Property_Type_id : 1,
        Property_Name : "Imperial",
        Property_Type_Name : "Flat",
        Property_BHK : 1,
        Property_City : "Ahmedabad",
        Property_Address : "Jagdishpark soc.",
        Property_Explore : "Buy",
        Property_Owner_Name : "Jaykant",
        Property_Marketer : "Vishnu"
    })
    const result = await user.save()
    console.log(result)
    //remain sqft and seller images
    //uid:1:6081792feb8794332c958a49
    //uid:2:6081797833520225d4e2f29f
    //pid:1:6081800d82106d386c2a878f
    //pid:2:608180627041583e5c8e8f9a
    //bid:1:608252b49a47d10c3064206f
    //bid:2:608253ad7f0510171c7fc596
    //pdid:1:608259056ec64e1c50d523f1
    //pdid:2:6082594e7c1aeb2630652b81
    //agid:1:60825c7d7179503218a2aca4
    //agid:2:60825d031257ea3cb4a604f5
}

post()

// //--------------------------------------------------------------
// const loanSchema = new mongoose.Schema({
//     Loan_ID : Number,
// 	UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Property_Type_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Property"
//     },
// 	Loan_Type : String,
// 	Bank_Partner : String,
// 	Customized_Loans : String,
// 	Loan_Amount : Number,
// })

// const Loan = mongoose.model("Loan",loanSchema)

// //-------------------------------------------------------------
// const propertysoldSchema = new mongoose.Schema({
//     Property_Type_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Property"
//     },
// 	UserID  : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	UserID1  : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Property_Name : String,
// 	Property_Type : String
// })

// const Propertysold = mongoose.model("Propertysold",propertysoldSchema)

// //---------------------------------------------------------------------
// const ratereviewSchema = new mongoose.Schema({
//     Property_Type_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Proprty"
//     },
// 	Rating : Number,
// 	Review : String
// })

// const Ratereview = mongoose.model("Ratereview",ratereviewSchema)

// //----------------------------------------------------------------------
// const sqftimageSchema = new mongoose.Schema({
//     Property_Type_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Property"
//     },
// 	BHK : Number,
// 	Area : Number,
// 	Images : {
//         data : Buffer,
//         contentType : String
//     },
// 	Budget : Number
// })

// const Sqftimage = mongoose.model("Sgftimage",sqftimageSchema)

// //---------------------------------------------------------------------
// const sellerimageSchema = new mongoose.Schema({
//     Property_Type_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Property"
//     },
// 	Images : {
//         data : Buffer,
//         contentType : String
//     }
// })

// const Sellerimage = mongoose.model("Sellerimage",sellerimageSchema)

// //----------------------------------------------------------------------
// const payrentSchema = new mongoose.Schema({
//     Rent_id : Number,
// 	UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Months : Number,
// 	Rent_Amount : Number,
// 	City : String,
// 	Landlord_Name : String,
// 	Landlord_Use : String
// })

// const Payrent = mongoose.model("Payrent",payrentSchema)

// //------------------------------------------------------------------------
// const rentagreementSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Bd_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Basicdetail"
//     },
// 	Pd_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Propertydetail"
//     },
// 	Ag_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "AgreementDetail"
//     },
// 	Dates : Date 
// })

// const Rentagreement = mongoose.model("Rentagreement",rentagreementSchema)

// //------------------------------------------------------------------------------
// const basicdetailSchema = new mongoose.Schema({
//     Bd_id : Number,
// 	L_Title : String,
// 	L_Name : String,
// 	L_Address : String,
// 	L_Address1 : String,
// 	L_Pincode : Number,
// 	L_City : String,
// 	L_State : String,
// 	T_Title : String,
// 	T_Name : String,
// 	T_Address : String,
// 	T_Address1 : String,
// 	T_Pincode : Number,
// 	T_City : String,
// 	T_State : String
// })

// const Basicdetail = mongoose.model("Basicdetail",basicdetailSchema)

// //--------------------------------------------------------------------
// const propertydetailSchema = new mongoose.Schema({
//     Pd_ID : Number,
// 	P_Address : String,
// 	P_Pincode : Number,
// 	P_City : String,
// 	P_State : String,
//     P_detail : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Pdetail"
//     },
//     O_detail : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Odetail"
//     }
// })

// const Propertydetail = mongoose.model("Propertydetail",propertydetailSchema)

// //---------------------------------------------------------------------------
// const pdetailSchema = new mongoose.Schema({
//     Pd_ID : Number,
// 	P_Area : Number,
// 	P_Bedrooms : Number,
// 	P_Living_Rooms : Number,
// 	P_Bathrooms : Number,
// 	P_Parking : Number,
// 	P_Kitchen : Number,
// 	P_Servantrooms : Number
// })

// const Pdetail = mongoose.model("Pdetail",pdetailSchema)

// //--------------------------------------------------------------------------
// const otherdetailSchema = new mongoose.Schema({
//     Od_ID : Number,
// 	P_Fan : Number,
// 	P_Tube : Number,
// 	P_Bed : Number,
// 	P_Sofa : Number,
// 	P_Table : Number,
// 	P_Chair : Number,
// 	P_AC : Number,
// 	P_Geyser : Number,
// 	P_Oven : Number,
// 	P_Fridge : Number,
// 	P_Washing_M : Number,
// 	P_Others : Number,
// })

// const Odetail = mongoose.model("Odetail",otherdetailSchema)

// //----------------------------------------------------------------------------
// const agreementdetailSchema = new mongoose.Schema({
//     Ag_ID : Number,
// 	Stamp : Number,
// 	A_Start_date : Date,
// 	A_duration : String,
// 	Rent_Paid : String,
// 	Rent_Amount : Number,
// 	Maintenance_Paid : String,
// 	Maintenance_Amount : Number,
// 	Security_Amount : Number,
// 	Security_Paid : String,
// 	Cheque_No : Number,
// 	Transaction_id : String,
// 	Notice_Period : Number,
// 	Lock_in_Period : Number,
// 	Appointed_By : String
// })

// const Agreementdetail = mongoose.model("AgreementDetail",agreementdetailSchema)

// //-----------------------------------------------------------------------------
// const rentreceiptSchema = new mongoose.Schema({
//     Rent_id : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "Payrent"
//     },
// 	UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Rent_Amount : Number,
// 	City : String,
// 	L_Name : String,
// 	L_Pan : String,
// 	Receipt_Start_date : Date,
// 	Receipt_End_date : Date,
// 	T_Name : String,
// 	T_Mobile_No : Number,
// 	T_Email : String
// })

// const Rentreceipt = mongoose.model("Rentreceipt",rentreceiptSchema)

// //--------------------------------------------------------------------
// const tenantverificationSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Package : String,
// 	Identity_Verification : Boolean,
// 	Criminal_court_check : Boolean,
// 	Civil_litigation_check : Boolean,
// 	Permanent_Address : Boolean,
// 	Reference_check : Boolean,
// 	Price : Number,
// 	Payment_Option : String,
// 	GST_Number : String
// })

// const Tenantverification = mongoose.model("Tenantverification",tenantverificationSchema)

// //-----------------------------------------------------------------------
// const rentalfurnitureSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	R_Name : Boolean,
// 	F_Name : Boolean,
// 	C_Name : Boolean,
// 	Dates : Date
// })

// const Rentalfurniture = mongoose.model("Rentalfurniture",rentalfurnitureSchema)

// //----------------------------------------------------------------------
// const legalserviceSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Package_Name : String,
// 	Package_Description : String,
// 	Package_Price : Number,
// 	Service_Partner : String,
// 	Payment_Option : String
// })

// const Legalservice = mongoose.model("Legalservice",legalserviceSchema)

// //-----------------------------------------------------------------------
// const decordesignSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	Livspace : Boolean,
// 	ST_Gloobain_glass : Boolean,
// 	Bonito_design : Boolean,
// 	Godrel_interior : Boolean,
// 	Homelane_interior : Boolean,
// 	Berger_painting : Boolean,
// 	Amplus_Solar : Boolean,
// 	Dates : Date
// })

// const Decordesign = mongoose.model("Decordesign",decordesignSchema)

// //-----------------------------------------------------------------
// const homeserviceSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceFor : String,
//     BHK : Number,
// 	Servicess : String,
// 	ServiceName : String,
// 	Service_description : String,
// 	Service_Price : Number,
// 	Service_Partner : String,
// 	Datetime : Date,
// 	Payment_Option : String
// })

// const Homeservice = mongoose.model("Homeservice",homeserviceSchema)

// //-----------------------------------------------------------
// const vastuSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Vastu_Consultants_Name : String,
//     Description : String,
// 	Package : String,
// 	Price : Number,
// 	Payment_Option : String
// })

// const Vastu = mongoose.model("Vastu",vastuSchema)

// //-----------------------------------------------------------------
// const carddetailSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Card_Number : Number,
// 	MONTHs : Number,
// 	Years : Number,
// 	CVV : Number,
// 	Card_HolderName : String
// })

// const Carddetail = mongoose.model("Carddetail",carddetailSchema)

// //-----------------------------------------------------------------
// const netbankingSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceNmae : String,
// 	Bank_Name : String,
// 	Account_No : Number,
// 	IFSC_Code : String,
// 	Landlord_pan : String
// })

// const Netbanking = mongoose.model("Netbanking",netbankingSchema)

// //------------------------------------------------------------
// const walletSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	Options : String
// })

// const Wallet = mongoose.model("Wallet",walletSchema)

// //-------------------------------------------------------------
// const upiSchema = new mongoose.Schema({
//     UserID : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User"
//     },
// 	ServiceName : String,
// 	UPI_id : String,
// 	Landlord_pan : String
// })

// const Upi = mongoose.model("Upi",upiSchema)

