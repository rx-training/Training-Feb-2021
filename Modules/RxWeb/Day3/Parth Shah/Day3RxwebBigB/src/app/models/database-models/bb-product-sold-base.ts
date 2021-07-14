import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class bbProductSoldBase {

//#region pid Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'pid', keyColumn: false})
        pid : any;
//#endregion pid Prop


//#region invoiceDate Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'invoiceDate', keyColumn: false})
        invoiceDate : any;
//#endregion invoiceDate Prop

}