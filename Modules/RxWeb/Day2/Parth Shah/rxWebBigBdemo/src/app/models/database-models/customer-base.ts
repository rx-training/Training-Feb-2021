import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerBase {

//#region custId Prop
        @prop()
        custId : number;
//#endregion custId Prop


//#region cust_Name Prop
        @required()
        @maxLength({value:50})
        cust_Name : string;
//#endregion cust_Name Prop


//#region address Prop
        @maxLength({value:50})
        address : string;
//#endregion address Prop


//#region phoneNo Prop
        @maxLength({value:50})
        phoneNo : string;
//#endregion phoneNo Prop





}