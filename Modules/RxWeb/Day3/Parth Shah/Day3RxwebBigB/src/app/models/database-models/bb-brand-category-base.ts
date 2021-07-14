import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class bbBrandCategoryBase {

//#region productName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'productName', keyColumn: false})
        productName : string;
//#endregion productName Prop


//#region brandName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'brandName', keyColumn: false})
        brandName : string;
//#endregion brandName Prop


//#region categoryName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'categoryName', keyColumn: false})
        categoryName : string;
//#endregion categoryName Prop

}