import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class bbSaleCustomerBase {

//#region cartID Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'cartID', keyColumn: true})
        cartID : number;
//#endregion cartID Prop


//#region productName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'productName', keyColumn: false})
        productName : string;
//#endregion productName Prop


//#region cust_Name Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'cust_Name', keyColumn: false})
        cust_Name : string;
//#endregion cust_Name Prop

}