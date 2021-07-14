import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SaleBase {

//#region saleId Prop
        @prop()
        saleId : number;
//#endregion saleId Prop


//#region productID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        productID : number;
//#endregion productID Prop


//#region productQty Prop
        @prop()
        productQty : number;
//#endregion productQty Prop


//#region invoiceDate Prop
        @required()
        invoiceDate : Date;
//#endregion invoiceDate Prop


//#region productPrice Prop
        @required()
        productPrice : number;
//#endregion productPrice Prop


//#region custId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        custId : number;
//#endregion custId Prop


//#region countryId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        countryId : number;
//#endregion countryId Prop


//#region cityId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cityId : number;
//#endregion cityId Prop


//#region shippedAddress Prop
        @required()
        @maxLength({value:100})
        shippedAddress : string;
//#endregion shippedAddress Prop


//#region taxes Prop
        @prop()
        taxes : number;
//#endregion taxes Prop


//#region invoiceAmount Prop
        @required()
        invoiceAmount : number;
//#endregion invoiceAmount Prop









}