import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ProductBase {

//#region productId Prop
        @prop()
        productId : number;
//#endregion productId Prop


//#region productName Prop
        @required()
        @maxLength({value:50})
        productName : string;
//#endregion productName Prop


//#region brandId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        brandId : number;
//#endregion brandId Prop


//#region productPrice Prop
        @required()
        productPrice : number;
//#endregion productPrice Prop


//#region productDescription Prop
        @maxLength({value:50})
        productDescription : string;
//#endregion productDescription Prop


//#region ingredients Prop
        @maxLength({value:50})
        ingredients : string;
//#endregion ingredients Prop







}