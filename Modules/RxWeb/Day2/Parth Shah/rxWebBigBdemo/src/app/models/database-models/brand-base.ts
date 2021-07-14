import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BrandBase {

//#region brandId Prop
        @prop()
        brandId : number;
//#endregion brandId Prop


//#region brandName Prop
        @required()
        @maxLength({value:50})
        brandName : string;
//#endregion brandName Prop


//#region categoryID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        categoryID : number;
//#endregion categoryID Prop





}