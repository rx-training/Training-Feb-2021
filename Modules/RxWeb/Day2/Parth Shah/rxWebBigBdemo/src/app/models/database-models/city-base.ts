import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CityBase {

//#region cityId Prop
        @prop()
        cityId : number;
//#endregion cityId Prop


//#region country_ID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        country_ID : number;
//#endregion country_ID Prop


//#region cityName Prop
        @required()
        @maxLength({value:30})
        cityName : string;
//#endregion cityName Prop





}