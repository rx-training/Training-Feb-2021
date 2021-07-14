import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class bbCustomerProductBase {

//#region custId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'custId', keyColumn: true})
        custId : number;
//#endregion custId Prop


//#region productID Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'productID', keyColumn: false})
        productID : number;
//#endregion productID Prop

}