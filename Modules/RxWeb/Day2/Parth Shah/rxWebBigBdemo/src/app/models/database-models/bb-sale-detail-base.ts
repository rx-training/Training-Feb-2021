import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class bbSaleDetailBase {

//#region saleId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'saleId', keyColumn: true})
        saleId : number;
//#endregion saleId Prop


//#region productPrice Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'productPrice', keyColumn: false})
        productPrice : number;
//#endregion productPrice Prop


//#region invoiceAmount Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'invoiceAmount', keyColumn: false})
        invoiceAmount : number;
//#endregion invoiceAmount Prop


//#region productQty Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'productQty', keyColumn: false})
        productQty : any;
//#endregion productQty Prop


//#region invoiceDate Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'invoiceDate', keyColumn: false})
        invoiceDate : any;
//#endregion invoiceDate Prop


//#region cust_Name Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'cust_Name', keyColumn: false})
        cust_Name : string;
//#endregion cust_Name Prop


//#region address Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'address', keyColumn: false})
        address : string;
//#endregion address Prop


//#region cityName Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'cityName', keyColumn: false})
        cityName : string;
//#endregion cityName Prop


//#region productName Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'productName', keyColumn: false})
        productName : string;
//#endregion productName Prop


//#region countryName Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'countryName', keyColumn: false})
        countryName : string;
//#endregion countryName Prop

}