import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CountryBase {

//#region countryId Prop
        @prop()
        countryId : number;
//#endregion countryId Prop


//#region countryName Prop
        @required()
        @maxLength({value:50})
        countryName : string;
//#endregion countryName Prop





}