import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CartBase {

//#region cartID Prop
        @prop()
        cartID : number;
//#endregion cartID Prop


//#region productId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        productId : number;
//#endregion productId Prop


//#region custId Prop
        @prop()
        custId : number;
//#endregion custId Prop





}